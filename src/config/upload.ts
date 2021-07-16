import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const tmpFoler = path.join(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFoler,
  storage: multer.diskStorage({
    destination: tmpFoler,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename.replace(/\s/g, ''));
    },
  }),
};
