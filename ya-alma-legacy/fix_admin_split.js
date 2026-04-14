const fs = require('fs');
const path = require('path');

const pageFile = 'src/app/admin/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

// Extract Shared Components (FormField, SectionDivider, CrudTable, ExtendedFieldsForm)
const sharedComps = ['FormField', 'SectionDivider', 'CrudTable', 'ExtendedFieldsForm', 'RichTextEditor', 'IconPicker'];
let sharedContent = `"use client";
import React, { useState } from "react";
import { Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, ImageIcon, FileText } from "lucide-react";
import { API, authFetch } from "../types";

`;

sharedComps.forEach(comp => {
    // Some are functions, some are consts
    const regex = new RegExp(`(function ${comp}\\([\\s\\S]*?\\n\\}|const ${comp} = [\\s\\S]*?\\n\\})\\s*(?=\\n(function |const |export |$|//))`, 'm');
    const match = pageContent.match(regex);
    if (match) {
        let code = match[0];
        // export it
        if (code.startsWith('function')) {
            code = code.replace(/^function/, 'export function');
        } else if (code.startsWith('const')) {
            code = code.replace(/^const/, 'export const');
        }
        sharedContent += code + '\n\n';
        pageContent = pageContent.replace(match[0], '');
    }
});

fs.writeFileSync('src/app/admin/components/shared.tsx', sharedContent);
console.log('Extracted shared components to shared.tsx');

// Now we need to update every component in src/app/admin/components to import these shared components.
const compsDir = 'src/app/admin/components';
const files = fs.readdirSync(compsDir);

files.forEach(file => {
    if (file.endsWith('.tsx') && file !== 'shared.tsx') {
        let content = fs.readFileSync(path.join(compsDir, file), 'utf8');
        
        // Find which shared components are used in this file
        let usedComps = sharedComps.filter(c => content.includes(c));
        
        if (usedComps.length > 0) {
            content = content.replace('import type {', `import { ${usedComps.join(', ')} } from "./shared";\nimport type {`);
            fs.writeFileSync(path.join(compsDir, file), content);
            console.log(`Updated imports in ${file}`);
        }
        
        // Also if the component has errors about API or authFetch, they should import it from types.
        if (content.includes('API') || content.includes('authFetch')) {
            if (!content.includes('import { API')) {
               content = content.replace('import type {', `import { API, authFetch } from "../types";\nimport type {`);
               fs.writeFileSync(path.join(compsDir, file), content);
            }
        }
    }
});

// Write back page.tsx
// wait page.tsx needs API, authFetch
pageContent = `import { API, authFetch } from "./types";\n` + pageContent;
fs.writeFileSync(pageFile, pageContent);

// One thing to fix: the components array in split_admin.js lacked some imports from page.tsx (like DashboardOverview).
const missingImports = `
import DashboardOverview from "./components/DashboardOverview";
import UniversitiesManager from "./components/UniversitiesManager";
import LanguageCentersManager from "./components/LanguageCentersManager";
import LanguageProgramsManager from "./components/LanguageProgramsManager";
import CoursesManager from "./components/CoursesManager";
import BlogManager from "./components/BlogManager";
import PagesManager from "./components/PagesManager";
import SpecializationsManager from "./components/SpecializationsManager";
import NavigationManager from "./components/NavigationManager";
import TestimonialsManager from "./components/TestimonialsManager";
import SiteSettingsManager from "./components/SiteSettingsManager";
import TranslationsManager from "./components/TranslationsManager";
import VideosManager from "./components/VideosManager";
import ConsultantsManager from "./components/ConsultantsManager";
import InquiriesManager from "./components/InquiriesManager";
`;

// Insert the missing imports if not there.
if (!pageContent.includes('import DashboardOverview')) {
   pageContent = pageContent.replace('import React, { useState, useEffect } from "react";', `import React, { useState, useEffect } from "react";\n${missingImports}\n`);
   fs.writeFileSync(pageFile, pageContent);
}

console.log('Fixed Page.tsx');
