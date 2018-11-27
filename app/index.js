import express from 'express';
import path from 'path';
import logger from './logger';

const app = express();

app.use(express.static(path.join(__dirname, '/../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../build/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`CBD-Lite application is listening to port ${port}`);
});

logger.info(process.env.ENV);
