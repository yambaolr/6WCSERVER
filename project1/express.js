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

//getStudent API route
app.get('/getStudent', (req, res) => {
    var response = {
        studentId: req.query.studentId,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        section: req.query.section
    }

    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`)
})

//route for adminForm
app.get('/adminForm', (req, res) =>{
    res.sendFile(__dirname + '/pages/admin.html')
});

//getAdmin API route
app.get('/getAdmin', (req, res) => {
    var response = {
        adminId: req.query.adminId,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        department: req.query.department
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