import express, {response} from 'express';
import multer from 'multer';
import cors from 'cors';

//file path
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

const __dirname = import.meta.dirname;
const __filename = fileURLToPath(import.meta.url);


var app = express();
app.use(express.static('public/'));
app.use(cors());
const urlEncoderParser = bodyParser.urlencoded({ extended: false });


//storage object; tells multer where to put file and what name
var storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    }, 
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    } 
});

var upload = multer({storage: storage}).fields([{name: 'file', maxCount: 1}]);

//route for studentForm
app.get('/studentForm', (req, res) =>{
    res.sendFile(__dirname + '/pages/student.html')
});

//postStudent API route
app.post('/postStudent', urlEncoderParser, (req, res) => {
    var response = {
        studentId: req.body.studentId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        section: req.body.section,
    }

    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`)
})

//route for adminForm
app.get('/adminForm', (req, res) =>{
    res.sendFile(__dirname + '/pages/admin.html')
});

//postAdmin API route
app.post('/postAdmin', (req, res) => {
    upload(req, res, (err) =>{
        if (err) return res.status(400).send('Error uploading file.');
        
        const uploadedFile = req.files['file'][0];
        var response = {
            adminId: req.body.adminId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            department: req.body.department,
            uploadedFile: uploadedFile.path
        }

        console.log("Response is: ", response);
        res.end(`Received Data: ${JSON.stringify(response)}`)
    })
});

//listen to port
var server = app.listen(5000, ()=> {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Server running at http://${host}:${port}`)
})