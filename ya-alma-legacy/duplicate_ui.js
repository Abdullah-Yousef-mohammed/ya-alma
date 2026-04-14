const fs = require('fs');

function processFile(path) {
    let content = fs.readFileSync(path, 'utf8');

    // 1. Interfaces
    content = content.replace(/([a-zA-Z0-9_]+Zh):\s*(string|number|boolean)(\s*[;,])/g, (match, p1, p2, p3) => {
        let msField = p1.replace('Zh', 'Ms');
        return `${p1}: ${p2}${p3} ${msField}: ${p2}${p3}`;
    });

    // 2. emptyRow and object literals
    // We match propertyZh: value,
    content = content.replace(/([a-zA-Z0-9_]+)Zh:\s*([^,;}]+)([,;}]+)/g, (match, p1, p2, p3) => {
        // Exclude if it's inside an arrow function parameter list or something weird
        // We only care about literals like "": "" or 0 or true
        if (p2.includes('=') || p2.includes('=>') || p2.trim() === 'v') return match;
        let p3Fixed = p3.startsWith(';') ? ';' : ','; 
        return `${p1}Zh: ${p2}${p3Fixed} ${p1}Ms: ${p2}${p3}`;
    });

    // 3. JSX <FormField> and <TextAreaField> lines
    // We split by lines to cleanly duplicate lines containing 'Zh' or 'Chinese' or '(ZH)'
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        newLines.push(line);
        
        // Match <FormField or <TextAreaField ... that contain Zh
        if ((line.includes('<FormField') || line.includes('<TextAreaField') || line.includes('<div')) && (line.includes('Zh}') || line.includes('Zh:'))) {
            // Check if it's an array push or input
            let msLine = line.replace(/Zh/g, 'Ms').replace(/zh/g, 'ms');
            msLine = msLine.replace('Chinese', 'Malay').replace('(ZH)', '(MS)');
            newLines.push(msLine);
        }
    }
    
    fs.writeFileSync(path, newLines.join('\n'));
}

processFile('src/app/admin/page.tsx');
processFile('src/app/admin/specializations/[id]/page.tsx');
console.log('UI duplicated');
