// const WebSocket = require('ws');
// const http = require('http');
// const wss = new WebSocket.Server({ noServer: true });
// // const setupWSConnection = require('./utils.js').setupWSConnection;
// const setupWSConnection = require("y-websocket/bin/utils").setupWSConnection

// const host = "0.0.0.0";
// const port = process.env.PORT || 1234;

// const server = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('okay');
// });

// wss.on('connection', setupWSConnection);

// server.on('upgrade', (request, socket, head) => {
//   const handleAuth = (ws) => {
//     wss.emit('connection', ws, request);
//   };
//   wss.handleUpgrade(request, socket, head, handleAuth);
// });

// console.log('Attempting to start server...');
// server.listen(port, host, () => {
//   console.log(`Server running at http://${host}:${port}`);
// });

const http = require('http');
const WebSocket = require('ws');
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');
  ws.send('Hello WebSocket client');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});