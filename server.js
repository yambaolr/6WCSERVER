import express from 'express';
import path from 'path';
import mime from 'mime';
import multer from 'multer';


app = express();

app.use(express.static('public'));

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/uploads');
    },
    filename: (req, res, cb) => {
        cb(null, file.originalname);
    }
});

const server = app.listen(5000);

