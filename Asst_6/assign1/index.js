const express = require("express");
const apiRouter = require("./router/apirouter");

const app = express();

app.use("/api", apiRouter);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
