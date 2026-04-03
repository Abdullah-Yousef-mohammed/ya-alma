"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Currency = "MYR" | "USD" | "SAR" | "CNY";

// Currency display config
const CURRENCY_INFO: Record<Currency, { symbol: string; prefix: boolean }> = {
  MYR: { symbol: "RM", prefix: true },
  USD: { symbol: "$",  prefix: true },
  SAR: { symbol: "﷼", prefix: false },
  CNY: { symbol: "¥", prefix: true },
};

interface LiveRates {
  base: string;                        // "MYR"
  rates: Record<Currency, number>;     // 1 MYR → X currency
  fetchedAt: number;                   // timestamp for cache TTL
}

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  /** amountInMyr – DB stores all fees in MYR */
  formatPrice: (amountInMyr: number | null | undefined) => string;
  liveRates: LiveRates | null;
  ratesLoading: boolean;
}

export const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CACHE_KEY = "xe_live_rates_v2";
const CACHE_TTL = 60 * 60 * 1000;       // 1 hour
const VALID: Currency[] = ["MYR", "USD", "SAR", "CNY"];

// Approximate fallback (1 MYR → ) in case API is unreachable
const FALLBACK_RATES: Record<Currency, number> = {
  MYR: 1,
  USD: 0.2128,
  SAR: 0.7982,
  CNY: 1.5319,
};

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("MYR");
  const [liveRates, setLiveRates]     = useState<LiveRates | null>(null);
  const [ratesLoading, setRatesLoading] = useState(true);
  const [mounted, setMounted]         = useState(false);

  // Restore user's saved currency choice
  useEffect(() => {
    const saved = localStorage.getItem("selected_currency") as Currency;
    if (saved && VALID.includes(saved)) setCurrencyState(saved);
    setMounted(true);
  }, []);

  // Fetch live exchange rates (with localStorage cache)
  useEffect(() => {
    const load = async () => {
      // 1. Try cache
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (raw) {
          const cached: LiveRates = JSON.parse(raw);
          if (Date.now() - cached.fetchedAt < CACHE_TTL) {
            setLiveRates(cached);
            setRatesLoading(false);
            return;
          }
        }
      } catch { /* ignore */ }

      // 2. Fetch fresh — base MYR, so rates = "how many X per 1 MYR"
      try {
        const res  = await fetch("https://open.er-api.com/v6/latest/MYR");
        const data = await res.json();
        if (data.result === "success") {
          const fresh: LiveRates = {
            base: "MYR",
            rates: {
              MYR: 1,
              USD: data.rates["USD"],
              SAR: data.rates["SAR"],
              CNY: data.rates["CNY"],
            },
            fetchedAt: Date.now(),
          };
          localStorage.setItem(CACHE_KEY, JSON.stringify(fresh));
          setLiveRates(fresh);
        } else {
          throw new Error("API returned non-success");
        }
      } catch (e) {
        console.warn("[Currency] Live rate fetch failed, using fallback rates.", e);
        setLiveRates({
          base: "MYR",
          rates: FALLBACK_RATES,
          fetchedAt: 0,   // stale — will retry next load
        });
      } finally {
        setRatesLoading(false);
      }
    };

    load();
  }, []);

  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr);
    localStorage.setItem("selected_currency", curr);
  };

  // Convert from MYR (DB base) to selected currency using live rates
  const formatPrice = (amountInMyr: number | null | undefined): string => {
    if (amountInMyr == null || isNaN(amountInMyr) || amountInMyr === 0) return "";

    const rate = liveRates?.rates[currency] ?? FALLBACK_RATES[currency];
    const converted = Math.round(amountInMyr * rate);
    const { symbol, prefix } = CURRENCY_INFO[currency];
    const formatted = converted.toLocaleString();
    return prefix ? `${symbol} ${formatted}` : `${formatted} ${symbol}`;
  };

  // Always render the provider so context is never undefined.
  // Before mount, formatPrice uses fallback rates — this is safe.
  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, liveRates, ratesLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within <CurrencyProvider>");
  return ctx;
}
