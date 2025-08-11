import express from 'express';
import path from 'path';
import mime from 'mime';
import multer from 'multer';


app = express();

app.use(express.static('public'));



const server = app.listen(5000);

