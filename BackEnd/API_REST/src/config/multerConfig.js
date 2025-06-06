import multer from 'multer';
import { extname, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Adaptação do __dirname para ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype !== 'image/png' &&
      file.mimetype !== 'image/jpeg'
    ) {
      return cb(new multer.MulterError('Extensão inválida, Arquivo deve ser PNG ou JPEG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
