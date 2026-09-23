const http = require("http");
const myServer = http.createServer((req , res) =>{
    res.end("Welcome to Nodejs Server")
});

myServer.listen(3000, () => console.log("Server is running on http://localhost:3000/"));
