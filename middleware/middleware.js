import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const setupMiddleware = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, 'public')));
};

export default setupMiddleware;
