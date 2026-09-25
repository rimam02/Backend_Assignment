const express = require("express");
const mongoose = require("mongoose");

const teacherRouter = require("./router/teacherRouter");
const studentRouter = require("./router/studentRouter");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/teacher_student_db")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

app.get("/", (req, res) => {
    res.send("Teacher and Student Registration API is running");
});

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});