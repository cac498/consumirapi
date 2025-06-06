import dotenv from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
import './database/index.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import tokenRoutes from './routes/tokenRoutes.js';
import alunoRoutes from './routes/alunoRoutes.js';
import fotoRoutes from './routes/fotoRoutes.js';

const whiteList = [
  'http://localhost:3000',
  'http://192.168.1.105:3000'
];
// Adaptação do __dirname para ES Modules
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};


const __dirname = dirname(fileURLToPath(import.meta.url));

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.port = process.env.PORT || 3000;
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
 this.app.use('/images/', cors(corsOptions), express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const appInstance = new App();
appInstance.start();

export default appInstance.app;
