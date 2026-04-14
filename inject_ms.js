const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'ya-alma-legacy-api', 'src', 'main', 'java', 'com', 'yaalma', 'api', 'models');
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.java')) return;
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // We want to match:
    // [optional @Column or whitespace]
    // private String nameZh;
    // and duplicate it as Ms.
    
    const lines = content.split('\n');
    let newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        newLines.push(line);
        
        // Find if this line has a private field ending in Zh
        const match = line.match(/^\s*private\s+(String|List<String>)\s+(\w+)Zh\s*(=\s*new\s*ArrayList<>\(\))?;\s*$/);
        
        if (match) {
            let spacePrefix = line.match(/^\s*/)[0];
            
            // Check if previous line had @Column
            let annotationsToDuplicate = [];
            let j = i - 1;
            while(j >= 0) {
                if (lines[j].trim().startsWith('@Column') || lines[j].trim().startsWith('@ElementCollection') || lines[j].trim().startsWith('@CollectionTable')) {
                    // if it's CollectionTable, we need to modify the name from _zh to _ms
                    let ann = lines[j];
                    if (ann.includes('_zh"')) {
                        ann = ann.replace('_zh"', '_ms"');
                    }
                    annotationsToDuplicate.unshift(ann); // add to front to keep order
                    j--;
                } else if (lines[j].trim() === '') {
                    j--;
                } else {
                    break;
                }
            }
            
            // Push annotations
            annotationsToDuplicate.forEach(ann => {
                newLines.push(ann);
            });
            
            // Push the Ms field
            let msLine = line.replace(/Zh(\s*[=;])/, 'Ms$1');
            newLines.push(msLine);
        }
    }
    
    fs.writeFileSync(path.join(dir, file), newLines.join('\n'));
});
console.log("Done");
