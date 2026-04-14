"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CompareEntity {
  id: number;
  name: string;
  nameAr: string;
  nameZh: string;
  logoUrl: string;
}

interface CompareContextType {
  compareList: CompareEntity[];
  addToCompare: (uni: CompareEntity) => void;
  removeFromCompare: (id: number) => void;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [compareList, setCompareList] = useState<CompareEntity[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('yaalma_compare');
    if (saved) {
      try {
        setCompareList(JSON.parse(saved));
      } catch (e) {
        // ignore parsing errors
      }
    }
  }, []);

  const addToCompare = (uni: CompareEntity) => {
    if (compareList.length >= 3) {
      alert("You can only compare up to 3 universities at a time.");
      return;
    }
    if (!compareList.find(c => c.id === uni.id)) {
      const newList = [...compareList, uni];
      setCompareList(newList);
      localStorage.setItem('yaalma_compare', JSON.stringify(newList));
    }
  };

  const removeFromCompare = (id: number) => {
    const newList = compareList.filter(c => c.id !== id);
    setCompareList(newList);
    localStorage.setItem('yaalma_compare', JSON.stringify(newList));
  };

  const clearCompare = () => {
    setCompareList([]);
    localStorage.removeItem('yaalma_compare');
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
