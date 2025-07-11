import * as multer from 'multer';

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const multerOptions: multer.Options = {
  storage,
};

export default multerOptions;