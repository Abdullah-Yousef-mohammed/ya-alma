const fs = require('fs');
const path = require('path');

const filePath = 'src/app/admin/page.tsx';
const targetDir = 'src/app/admin/components';
const content = fs.readFileSync(filePath, 'utf8');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Map of components to extract
const components = [
    'DashboardOverview',
    'UniversitiesManager',
    'LanguageCentersManager',
    'LanguageProgramsManager',
    'CoursesManager',
    'BlogManager',
    'SpecializationsManager',
    'NavigationManager',
    'TestimonialsManager',
    'TranslationsManager',
    'VideosManager',
    'ConsultantsManager',
    'InquiriesManager',
    'SiteSettingsManager',
    'PagesManager'
];

let remainingContent = content;
let importsToInject = '';

components.forEach(comp => {
    // Look for `function ComponentName() { ... }` or `const ComponentName = ...`
    // In this file they are all `function ComponentName() {`
    const regex = new RegExp(`(// ─── .*? ───────────────────────────\\r?\\n)?function ${comp}\\(\\) \\{[\\s\\S]*?\\n\\}(?=\\n// ───|\\nfunction |$)`, 'm');
    const match = remainingContent.match(regex);
    
    if (match) {
        const compBody = match[0];
        
        // Remove from main content
        remainingContent = remainingContent.replace(compBody, '');
        
        // Prepare new file content. It needs React, lucide-react (all icons), and the types.
        // For simplicity, we just inject the top-level types and API constant, or export them from a types file.
        // To be perfectly safe, we'll prefix each file with typical imports.
        const fileContent = `"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";
import { API, authFetch } from "../types"; // We will create this
import type { University, LanguageCenter, Course, Testimonial, BlogPost, SiteSettings } from "../types";

${compBody}

export default ${comp};
`;
        fs.writeFileSync(path.join(targetDir, `${comp}.tsx`), fileContent);
        console.log(`Extracted ${comp}.tsx`);
        
        importsToInject += `import ${comp} from "./components/${comp}";\n`;
    }
});

// Now we need to create the types.ts file
const typesContent = `
export interface University { id: number; name: string; nameAr: string; nameZh: string; nameMs: string;  location: string; locationAr: string; locationZh: string; locationMs: string;  state: string; logoUrl: string; isPrivate: boolean; freeOfferLetter: boolean; courseCount: number; ranking: string; aboutEn: string; aboutAr: string; aboutZh: string; aboutMs: string;  heroImage: string; videoUrl: string; videoUrlAr: string; videoUrlZh: string; videoUrlMs: string;  galleryUrl1: string; galleryUrl2: string; galleryUrl3: string; galleryUrl4: string; bannerUrl: string; locationMapUrl: string; scholarshipDescEn: string; scholarshipDescAr: string; scholarshipDescZh: string; scholarshipDescMs: string;  scholarshipDiscount: string; scholarshipCriteria: string; admissionUndergradEn: string; admissionUndergradAr: string; admissionUndergradZh: string; admissionUndergradMs: string;  admissionPostgradEn: string; admissionPostgradAr: string; admissionPostgradZh: string; admissionPostgradMs: string;  registrationFeeMyr: number; visaFeeMyr: number; insuranceFeeMyr: number; depositFeeMyr: number; nextIntakeMonths: string; registrationDeadline?: string; }
export interface LanguageCenter { id: number; name: string; nameAr: string; nameZh: string; nameMs: string;  location: string; locationAr: string; locationZh: string; locationMs: string;  state: string; logoUrl: string; aboutEn: string; aboutAr: string; aboutZh: string; aboutMs: string;  heroImage: string; videoUrl: string; videoUrlAr: string; videoUrlZh: string; videoUrlMs: string;  galleryUrl1: string; galleryUrl2: string; galleryUrl3: string; galleryUrl4: string; bannerUrl: string; locationMapUrl: string; scholarshipDescEn: string; scholarshipDescAr: string; scholarshipDescZh: string; scholarshipDescMs: string;  scholarshipDiscount: string; scholarshipCriteria: string; admissionUndergradEn: string; admissionUndergradAr: string; admissionUndergradZh: string; admissionUndergradMs: string;  admissionPostgradEn: string; admissionPostgradAr: string; admissionPostgradZh: string; admissionPostgradMs: string;  registrationFeeMyr: number; visaFeeMyr: number; insuranceFeeMyr: number; depositFeeMyr: number; nextIntakeMonths: string; registrationDeadline?: string; }
export interface Course { id: number; titleEn: string; titleAr: string; titleZh: string; titleMs: string;  facultyEn: string; facultyAr: string; facultyZh: string; facultyMs: string;  level: string; levelAr: string; levelZh: string; levelMs: string;  universityId: number; universityName: string; universityNameAr: string; universityNameZh: string; universityNameMs: string;  feeMyr: number; duration: string; durationAr: string; durationZh: string; durationMs: string;  intakes: string; intakesAr: string; intakesZh: string; intakesMs: string;  }
export interface Testimonial { id: number; studentName: string; studentNameZh: string; studentNameMs: string;  universityName: string; universityNameAr: string; universityNameZh: string; universityNameMs: string;  reviewText: string; reviewTextAr: string; reviewTextZh: string; reviewTextMs: string;  rating: number; }
export interface BlogPost { id: number; title: string; titleAr: string; titleZh: string; titleMs: string;  category: string; categoryAr: string; categoryZh: string; categoryMs: string;  date: string; imageUrl: string; videoUrl?: string; videoUrlAr?: string; videoUrlZh?: string; videoUrlMs?: string; excerpt: string; excerptAr: string; excerptZh: string; excerptMs: string;  contentEn: string; contentAr: string; contentZh: string; contentMs: string;  published: boolean; }
export interface SiteSettings { siteName: string; siteNameAr: string; whatsappNumber: string; email: string; phone: string; address: string; }

export const API = \`\${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}\`;

export const authFetch = (url: string, options: any = {}) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
  const headers = { ...options.headers };
  if (token) {
    headers['Authorization'] = \`Bearer \${token}\`;
  }
  return fetch(url, { ...options, headers });
};
`;
fs.writeFileSync('src/app/admin/types.ts', typesContent);
console.log('Created types.ts');

// Inject imports below "use client";
remainingContent = remainingContent.replace('"use client";\n', `"use client";\n\n${importsToInject}\nimport { API, authFetch } from "./types";\n`);

// Remove local interfaces and API definition from remaining content to avoid conflicts
remainingContent = remainingContent.replace(/\/\/ ─── Types ──────────────────────────────────────────[\s\S]*?\/\/ ─── Sidebar Navigation/m, '// ─── Sidebar Navigation');

fs.writeFileSync(filePath, remainingContent);
console.log('Updated admin/page.tsx with component imports');
