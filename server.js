const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8003;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './pc_login.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code, 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Available pages:');
  console.log(`  - PC端登录页: http://localhost:${PORT}/pc_login.html`);
  console.log(`  - PC端生成页: http://localhost:${PORT}/pc_generate.html`);
  console.log(`  - PC端资产页: http://localhost:${PORT}/pc_assets.html`);
  console.log(`  - PC端后台管理: http://localhost:${PORT}/pc_admin.html`);
  console.log(`  - PC端社区页: http://localhost:${PORT}/pc_community.html`);
  console.log(`  - PC端全部工具页: http://localhost:${PORT}/pc_tools.html`);
});
