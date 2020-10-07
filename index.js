const express = require("express");

const app = express();
const port = 8080;

//to solve formatting issues by parsing JSON using express
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//declaring the modules
let modules = [
    {
        id: "1",
        code: "CMPG342",
        name: "Operating sytems",
        year: "2020",
    },
    {
        id: "2",
        code: "CMPG323",
        name: "IT Developments",
        year: "2020",
    }
];

//get the module list in the form of JSON
app.get('/module', (req,res) => {
    res.json(modules)
});

//add a module
app.post('/module',(req,res) => {
    const module = req.body

    console.log(module)
    console.push(module)
    res.send('Module is added to the list.')
})

//set the server to listen at the port
app.listen(port, () => console.log('Server listening at port ',$,{port}));