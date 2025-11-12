const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('.'));
app.use('/trinity-website-875b5b.webflow.io', express.static('trinity-website-875b5b.webflow.io'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'trinity-website-875b5b.webflow.io', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});