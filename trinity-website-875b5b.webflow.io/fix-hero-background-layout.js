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
    
    // Fix hero section with proper background attachment and positioning
    content = content.replace(
      /(<section[^>]*class="[^"]*hero[^"]*"[^>]*style="[^"]*)/g,
      '$1position: relative; background-attachment: scroll; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding-top: 120px; padding-bottom: 80px; '
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed hero background layout in ${file}`);
  }
});