"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hash, Camera, PlaySquare, Globe, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const SOCIAL_KEY = "ya_alma_social_links";
const defaultSocial = {
  tiktok:    "https://www.tiktok.com/@yaalmalegacy",
  instagram: "https://www.instagram.com/yaalmalegacy",
  website:   "https://yaalmalegacy.com",
  youtube:   "https://www.youtube.com/@yaalmalegacy",
};

export default function Footer() {
  const { t } = useLanguage();
  const [social, setSocial] = useState(defaultSocial);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(SOCIAL_KEY);
      if (stored) setSocial(JSON.parse(stored));
    } catch {}
  }, []);

  return (
    <footer id="contact" className="site-footer bg-[#11192d] text-gray-300 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-white dark:bg-[#0b0f19] p-2 rounded-xl">
                <Image 
                  src="/LOGO.jpeg" 
                  alt="Y.A ALMA LEGACY Logo" 
                  width={140} 
                  height={70} 
                  className="object-contain h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              {/* TikTok */}
              <a href={social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-gold)] hover:text-white transition-all text-gray-400">
                <Hash size={18} />
              </a>
              {/* Instagram */}
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-gold)] hover:text-white transition-all text-gray-400">
                <Camera size={18} />
              </a>
              {/* Website */}
              <a href={social.website} target="_blank" rel="noopener noreferrer" aria-label="Website"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-gold)] hover:text-white transition-all text-gray-400">
                <Globe size={18} />
              </a>
              {/* YouTube */}
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-gold)] hover:text-white transition-all text-gray-400">
                <PlaySquare size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.quick}</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-[var(--color-brand-gold)] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] opacity-50"></span> {t.footer.about}</Link></li>
              <li><Link href="/universities" className="hover:text-[var(--color-brand-gold)] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] opacity-50"></span> {t.footer.universities}</Link></li>
              <li><Link href="/#services" className="hover:text-[var(--color-brand-gold)] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] opacity-50"></span> {t.footer.services}</Link></li>
              <li><Link href="/privacy" className="hover:text-[var(--color-brand-gold)] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] opacity-50"></span> {t.footer.privacy}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.edu}</h4>
            <ul className="space-y-4">
              <li><Link href="/language-centers" className="hover:text-[var(--color-brand-gold)] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] opacity-50"></span> {t.footer.lang}</Link></li>
              <li><Link href="/courses" className="hover:text-[var(--color-brand-gold)] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] opacity-50"></span> {t.footer.bachelor}</Link></li>
              <li><Link href="/courses" className="hover:text-[var(--color-brand-gold)] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] opacity-50"></span> {t.footer.master}</Link></li>
              <li><Link href="/courses" className="hover:text-[var(--color-brand-gold)] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] opacity-50"></span> {t.footer.phd}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.contact}</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--color-brand-gold)] flex-shrink-0" size={20} />
                <span>Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--color-brand-gold)] flex-shrink-0" size={20} />
                <a href="https://wa.me/601158722903" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-gold)] transition-colors">
                  +601158722903
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[var(--color-brand-gold)] flex-shrink-0" size={20} />
                <a href="mailto:info@yaalmalegacy.com" className="hover:text-[var(--color-brand-gold)] transition-colors">
                  <span>info@yaalmalegacy.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <p className="mt-2 md:mt-0">Built With Excellence</p>
        </div>
      </div>
    </footer>
  );
}
