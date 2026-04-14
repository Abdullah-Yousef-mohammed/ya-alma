const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const mappings = [
  { regex: /(?<!dark:)(bg-white)/g, replacement: 'bg-white dark:bg-[#0b0f19]' },
  { regex: /(?<!dark:)(bg-gray-50)/g, replacement: 'bg-gray-50 dark:bg-[#11192d]' },
  { regex: /(?<!dark:)(bg-gray-100)/g, replacement: 'bg-gray-100 dark:bg-gray-800' },
  { regex: /(?<!dark:)(text-gray-900)/g, replacement: 'text-gray-900 dark:text-gray-100' },
  { regex: /(?<!dark:)(text-\[\#11192d\])/g, replacement: 'text-[#11192d] dark:text-gray-100' },
  { regex: /(?<!dark:)(text-gray-800)/g, replacement: 'text-gray-800 dark:text-gray-200' },
  { regex: /(?<!dark:)(text-gray-700)/g, replacement: 'text-gray-700 dark:text-gray-300' },
  { regex: /(?<!dark:)(text-gray-600)/g, replacement: 'text-gray-600 dark:text-gray-400' },
  { regex: /(?<!dark:)(border-gray-100)/g, replacement: 'border-gray-100 dark:border-gray-800' },
  { regex: /(?<!dark:)(border-gray-200)/g, replacement: 'border-gray-200 dark:border-gray-700' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      for (const map of mappings) {
        // Only replace if the replacement isn't already there right next to it
        // A simple way is to do the replacement, and then fix duplicates.
        content = content.replace(map.regex, map.replacement);
      }
      
      // Cleanup duplicates if they were already there like "bg-white dark:bg-[#0b0f19] dark:bg-[#0b0f19]"
      content = content.replace(/dark:bg-\[\#0b0f19\]\s+dark:bg-\[\#0b0f19\]/g, 'dark:bg-[#0b0f19]');
      content = content.replace(/dark:bg-\[\#11192d\]\s+dark:bg-\[\#11192d\]/g, 'dark:bg-[#11192d]');
      content = content.replace(/dark:text-gray-100\s+dark:text-gray-100/g, 'dark:text-gray-100');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Dark mode classes injected.');
