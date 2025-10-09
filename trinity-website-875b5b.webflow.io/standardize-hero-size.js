const fs = require('fs');
const path = require('path');

const files = [
  'services.html',
  'about-us.html', 
  'contact.html',
  'career.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Standardize hero section height to 80vh like other pages
    content = content.replace(
      /min-height:\s*\d+vh;?/g,
      'min-height: 80vh;'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Standardized hero size in ${file}`);
  }
});