import express, { response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';


const __dirname = import.meta.dirname;
const urlEncoderParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(express.static('public'));

//route for home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/home.html')
});

//route for student
app.get('/student', (req, res) => {
    res.sendFile(__dirname + '/pages/student.html')
});

app.post('/postStudent', urlEncoderParser, (req, res) => {
    var response = {
        studentId: req.body.studentId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        section: req.body.section
    }

    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`)
})

//route for admin
app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/pages/admin.html')
});

app.post('/postAdmin', urlEncoderParser, (req, res) => {
    var response = {
        adminId: req.body.adminId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department
    }

    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`)
})


var server = app.listen(5000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Server running at http://${host}:${port}`)
});
