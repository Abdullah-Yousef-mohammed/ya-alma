const fs = require('fs');

function restoreMsInInterfacesAndEmptyRows() {
    let c = fs.readFileSync('src/app/admin/page.tsx', 'utf8');

    // Restore Interface fields if completely missing
    c = c.replace(/([a-zA-Z0-9_]+)Zh:\s*(string|number|boolean)(\s*[;,])/g, (match, p1, p2, p3) => {
        return `${p1}Zh: ${p2}${p3} ${p1}Ms: ${p2}${p3}`;
    });

    // Restore emptyRows if missing
    // We already have nameZh: "", how do we add nameMs: "" safely?
    // Let's do it if it's NOT followed by nameMs
    c = c.replace(/([a-zA-Z0-9_]+Zh):\s*([^,;}]+)([,;}]+)(?!\s*[a-zA-Z0-9_]+Ms)/g, (match, p1, p2, p3) => {
        if (p2.includes('=') || p2.includes('=>') || p2.trim() === 'v') return match;
        const p1Ms = p1.replace('Zh', 'Ms');
        return `${p1}: ${p2}${p3} ${p1Ms}: ${p2}${p3}`;
    });

    fs.writeFileSync('src/app/admin/page.tsx', c);
}

restoreMsInInterfacesAndEmptyRows();
