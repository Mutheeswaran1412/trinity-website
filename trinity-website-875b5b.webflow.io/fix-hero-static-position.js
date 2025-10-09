const fs = require('fs');
const path = require('path');

const files = [
  'about-us.html', 
  'contact.html',
  'career.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove any negative margins that cause shifting
    content = content.replace(/margin-top:\s*-\d+px;?/g, '');
    
    // Add static positioning to hero sections
    content = content.replace(
      /(<section[^>]*class="[^"]*hero[^"]*"[^>]*style="[^"]*)/g,
      '$1position: static; margin-top: 0; padding-top: 140px; '
    );
    
    // Ensure body has proper padding for fixed header
    content = content.replace(
      /body\s*{\s*padding-top:\s*\d+px;/g,
      'body {\n        padding-top: 0;'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed static hero positioning in ${file}`);
  }
});