const http = require("http");

const myServer = http.createServer((req, res) => {
    const nav = `
    <nav> 
        <a href="/">Home</a> |
        <a href="/about">About Me</a> |
        <a href="/skills">Skills</a> |
        <a href="/projects">Projects</a> |
        <a href="/contact">Contact</a>
    </nav>
    <hr>
    `;


    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`${nav}<h1>Home</h1><p>Welcome to my personal portfolio.</p>`);
    } 
    
    if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`${nav}<h1>About Me</h1><p>I am a student learning Node.js and web development.</p><p>Example of 'GET' method</p>`);
    } 
    
    if (req.url === "/skills") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`${nav}<h1>Skills</h1><p>JavaScript, Node.js, HTML, CSS</p>`);
    } 
    
    if (req.url === "/projects") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`${nav}<h1>Projects</h1><p>Personal Portfolio Server, Student JSON API</p>`);
    } 
    
    if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`${nav}<h1>Contact Details</h1><p>Email: john.doe@example.com</p>`);
    } 

    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end(`${nav}<h1>404 - Page Not Found</h1>`);
});

myServer.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
