const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.port || 8080;
module.exports = app;

const createApp = () => {
  app.use('/api', require('./api'));
  app.use(express.static(path.resolve(__dirname, '..', 'public')));
  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', 'public/index.html'));
  });
};

const startListening = () => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

const bootApp = async () => {
  await createApp();
  await startListening();
};

bootApp();
