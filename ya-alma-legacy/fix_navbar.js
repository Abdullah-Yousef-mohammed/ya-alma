const fs = require('fs');
let c = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

c = c.replace(/language === "ms" \? ([a-zA-Z]+)\.ms/g, 'language === "ms" ? ($1.ms || $1.en)');

fs.writeFileSync('src/components/layout/Navbar.tsx', c);
