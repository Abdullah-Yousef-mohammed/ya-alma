const fs = require('fs');
const path = require('path');

const pageFile = 'src/app/admin/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');
let sharedContent = fs.readFileSync('src/app/admin/components/shared.tsx', 'utf8');

// Extract CrudTable and TextAreaField manually to shared.tsx
const extractComponent = (regex, compName) => {
    const match = pageContent.match(regex);
    if (match) {
        let code = match[0];
        if (code.startsWith('function')) {
            code = code.replace(/^function/, 'export function');
        } else if (code.startsWith('const')) {
            code = code.replace(/^const/, 'export const');
        }
        sharedContent += '\n\n' + code;
        pageContent = pageContent.replace(match[0], '');
        console.log(`Extracted ${compName}`);
    }
};

extractComponent(/function CrudTable<T extends \{ id\?: number \}>\([\s\S]*?\n\}(?=\nfunction|$)/, 'CrudTable');
extractComponent(/function TextAreaField\([\s\S]*?\n\}(?=\nfunction|$)/, 'TextAreaField');

fs.writeFileSync('src/app/admin/components/shared.tsx', sharedContent);
fs.writeFileSync(pageFile, pageContent);

const compsDir = 'src/app/admin/components';
const files = fs.readdirSync(compsDir);
files.forEach(file => {
    if (file.endsWith('.tsx') && file !== 'shared.tsx') {
        let content = fs.readFileSync(path.join(compsDir, file), 'utf8');
        let compsToImport = [];
        if (content.includes('CrudTable')) compsToImport.push('CrudTable');
        if (content.includes('TextAreaField')) compsToImport.push('TextAreaField');
        
        if (compsToImport.length > 0) {
            content = content.replace(/import \{ ([\w\s,]+) \} from "\.\/shared";/, (match, p1) => {
               // push without duplicates
               compsToImport.forEach(c => {
                   if (!p1.includes(c)) p1 += `, ${c}`;
               });
               return `import { ${p1} } from "./shared";`;
            });
            fs.writeFileSync(path.join(compsDir, file), content);
            console.log(`Updated imports in ${file}`);
        }
    }
});
