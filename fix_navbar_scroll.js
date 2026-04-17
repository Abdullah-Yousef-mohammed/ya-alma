const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'ya-alma-legacy', 'src', 'components', 'layout', 'Navbar.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find the precise line for the Mobile Menu Overlay div
const beforeStr = `      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 bg-white dark:bg-[#0b0f19] shadow-xl overflow-y-auto px-4 pt-20 pb-12 z-40" style={{ minHeight: '100dvh' }} dir={language === "ar" ? "rtl" : "ltr"}>`;

const afterStr = `      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-[#0b0f19] shadow-xl overflow-y-auto px-4 pt-24 pb-12 z-40" style={{ height: '100dvh' }} dir={language === "ar" ? "rtl" : "ltr"}>`;

if (content.includes(beforeStr)) {
  content = content.replace(beforeStr, afterStr);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Success! Replaced correctly.");
} else {
  console.log("Error: String not found.");
}
