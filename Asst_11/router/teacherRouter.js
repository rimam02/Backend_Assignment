const express = require("express");
const bcrypt = require("bcrypt");
const Teacher = require("../model/teacherModel");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { name, email, password, subject } = req.body;

        if (!name || !email || !password || !subject) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        const existingTeacher = await Teacher.findOne({ email });

        if (existingTeacher) {
            return res.status(400).json({
                message: "Teacher already registered with this email"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const teacher = new Teacher({
            name,
            email,
            password: hashedPassword,
            subject
        });

        await teacher.save();

        res.status(201).json({
            message: "Teacher registered successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

module.exports = router;
