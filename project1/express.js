import express, {response} from 'express';
const __dirname = import.meta.dirname;

var app = express();

app.use(express.static('public/'));

//route for Homepage
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/pages/home.html')
});

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
        section: req.body.section
    }

    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`)
})

//route for adminForm
app.get('/adminForm', (req, res) =>{
    res.sendFile(__dirname + '/pages/admin.html')
});

//postAdmin API route
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

//listen to port
var server = app.listen(5000, ()=> {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Server running at http://${host}:${port}`)
})