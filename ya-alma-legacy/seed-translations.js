const fs = require('fs');

const contextFile = fs.readFileSync('./src/lib/LanguageContext.tsx', 'utf-8');

// A very hacky but effective way to extract the massive `translations` object from the TSX file
const txSegment = contextFile.split('export const translations = ')[1].split(';\n\ninterface LanguageContextType')[0];

let translationsDict = {};
try {
  translationsDict = eval('(' + txSegment + ')');
} catch (e) {
  console.log("Could not eval directly:", e);
}

const en = translationsDict.en || {};
const ar = translationsDict.ar || {};
const zh = translationsDict.zh || {};

const dbPayload = [];

// Recursive flatten function
function flattenObj(obj, prefix = '') {
  let result = {};
  for (const k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      const nested = flattenObj(obj[k], prefix + k + '.');
      result = { ...result, ...nested };
    } else {
      result[prefix + k] = obj[k];
    }
  }
  return result;
}

const flatEn = flattenObj(en);
const flatAr = flattenObj(ar);
const flatZh = flattenObj(zh);

for (const key in flatEn) {
  dbPayload.push({
    key: key,
    en: flatEn[key] || "",
    ar: flatAr[key] || flatEn[key] || "",
    zh: flatZh[key] || flatEn[key] || ""
  });
}

const https = require('http');

const data = JSON.stringify(dbPayload);

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/api/translations/batch',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, res => {
  console.log(`Backend seed status: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d)
  })
});

req.on('error', error => {
  console.error(error)
});

req.write(data);
req.end();
