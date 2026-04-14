const fs = require('fs');

const filePath = 'src/app/admin/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all fetch occurrences with authFetch safely.
content = content.replace(/(\W)fetch\(/g, '$1authFetch(');

// Actually, in handleLogin, let's keep fetch, just to be pure.
content = content.replace(/const res = await authFetch\(`\$\{API\}\/auth\/login`/g, 'const res = await fetch(`${API}/auth/login`');
content = content.replace(/return authFetch\(url, \{ \.\.\.options/g, 'return fetch(url, { ...options');

fs.writeFileSync(filePath, content);
console.log("Protected API calls updated in admin page");
