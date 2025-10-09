const fs = require('fs');
const path = require('path');

const serviceFiles = [
  'services/buisness-intelligence.html',
  'services/data-engineering.html',
  'services/data-governance.html',
  'services/data-modernization.html',
  'services/data-strategy.html',
  'services/ERP-planning.html',
  'services/staffing-solutions.html',
  'services/web-development.html'
];

const basePath = 'c:\\Users\\muthe\\OneDrive\\Documents\\trinity-main (Copy 2)-20250929T103421Z-1-001\\trinity-main (Copy 2)\\trinity-website-875b5b.webflow.io\\';

serviceFiles.forEach(file => {
  const filePath = path.join(basePath, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add curve class to section_hero
    content = content.replace(
      /<section class="section_hero"/g,
      '<section class="section_hero section-with-curve"'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed curve for: ${file}`);
  }
});

console.log('All service sub-pages updated with curves!');