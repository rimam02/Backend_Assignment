const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../model/studentModel");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { name, email, password, course, age } = req.body;

        if (!name || !email || !password || !course || !age) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        if (age < 5) {
            return res.status(400).json({
                message: "Age must be at least 5"
            });
        }

        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(400).json({
                message: "Student already registered with this email"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const student = new Student({
            name,
            email,
            password: hashedPassword,
            course,
            age
        });

        await student.save();

        res.status(201).json({
            message: "Student registered successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

module.exports = router;
