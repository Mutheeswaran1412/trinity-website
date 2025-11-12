const fs = require('fs');
const path = require('path');

const files = [
  'career.html',
  'jobs.html',
  'services/AI-solution.html',
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

files.forEach(file => {
  const filePath = path.join(basePath, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add CSS link if not present
    if (!content.includes('curvy-wave.css')) {
      content = content.replace(
        /<\/head>/,
        '    <link rel="stylesheet" href="../curvy-wave.css" />\n  </head>'
      );
    }
    
    // Add curve class to first section after main wrapper
    content = content.replace(
      /<section([^>]*style="[^"]*background[^"]*"[^>]*)>/,
      '<section class="section-with-curve"$1>'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${file}`);
  }
});

console.log('All files updated with curve effect!');