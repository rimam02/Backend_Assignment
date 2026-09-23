const http = require("http");

const myServer = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <h1>Student Portal</h1>
        <p>Name: Rima M</p>
        <p>Course: Full Stack Development</p>
        <p>College: ITM Skills University</p>
        <p>Welcome to our Node.js application.</p>
    `);
});

myServer.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
