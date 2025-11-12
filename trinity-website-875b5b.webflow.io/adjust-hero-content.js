const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'about-us.html', 
  'contact.html',
  'career.html',
  'services.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add padding-top to hero sections to push content down slightly
    content = content.replace(
      /(<section[^>]*class="[^"]*hero[^"]*"[^>]*style="[^"]*)/g,
      '$1padding-top: 140px; '
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Adjusted hero content positioning in ${file}`);
  }
});