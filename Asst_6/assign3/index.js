const express = require('express')
const PORT = 3000;
const app = express();

function logger(req,res,next){
    const currentDateTime = new Date().toLocaleString();
    console.log(`${req.method} ${req.url} ${currentDateTime}`)
    next();
}

app.use(logger);

app.get('/about', (req,res)=>{
    res.send("About Us")
})
app.get('/', (req,res)=>{
    res.send("Welcome to home page")
})
app.get('/contact', (req,res)=>{
    res.send("Contact us")
})

app.listen(PORT , () =>{console.log(`Server is running on localhost:${PORT}`)})
