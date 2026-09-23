const express = require('express')
const router = express.Router();

function routerLogger(req ,res,next){

    const currentdate = new Date().toLocaleString();
    const fullurl = req.baseUrl + req.url;
    console.log(`${req.method} ${fullurl} ${currentdate}`);
    next();
}

router.use(routerLogger)

router.get("/students", (req, res) => {
    res.send("Students List");
});

router.get("/courses", (req, res) => {
    res.send("Courses List");
});

router.get("/facaulty", (req, res) => {
    res.send("Faculty List");
});

module.exports = router;
