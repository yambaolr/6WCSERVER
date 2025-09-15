import express from 'express';
import multer from 'multer';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.static('public/'));
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

//Multer  for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage }).fields([{ name: 'file', maxCount: 1 }]);


// GET Student
app.get('/getStudent', (req, res) => {
  const response = {
    studentId: req.query.studentId,
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    section: req.query.section,
  };

  console.log("GET Student Response:", response);
  res.json(response);
});


//POST Admin
app.post('/postAdmin', (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(400).send('Error uploading file.');

    const uploadedFile = req.files['file'][0];
    const response = {
      adminId: req.body.adminId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      department: req.body.department,
      uploadedFile: uploadedFile.path
    };

    console.log("POST Admin Response:", response);
    res.json(response);
  });
});

//Listen
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
