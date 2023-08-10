const express = require('express');

//###############################################

// env variables

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || null;
const SERVER_PORT = process.env.SERVER_PORT || 8080;

//###############################################

process.title = 'nodejs-express-hello';

// kill logging

process.on('SIGINT', () => {
  console.error('Process killed by SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.error('Process killed by SIGTERM');
  process.exit(0);
});

// exception logging

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception thrown', error);
  process.exit(1);
});

//###############################################

const app = express();

if (SERVER_HOSTNAME) {
  app.listen(SERVER_PORT, SERVER_HOSTNAME, () => {
    console.log(`Server running at http://${SERVER_HOSTNAME}:${SERVER_PORT}/`);
    console.log('Press CTRL + C to shutdown');
  });
} else {
  app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://*:${SERVER_PORT}/`);
    console.log('Press CTRL + C to shutdown');
  });
}

// GET /

app.get('/', (req, res) => {
  res.status(200).json({
    path: '/',
    message: 'Hello World'
  });
});

// GET /users/:id

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.status(200).json({
    path: '/users/:id',
    userId: userId
  });
});
