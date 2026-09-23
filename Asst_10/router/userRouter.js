const express = require("express");
const router = express.Router();

const db = require("../config/firebase");
const userSchema = require("../schema/userSchema");

router.post("/users", async (req, res) => {
    try {

        const { error, value } = userSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: "Validation failed",
                error: error.details[0].message
            });
        }

        const docRef = await db.collection("users").add(value);

        console.log("User stored successfully");

        res.status(201).json({
            message: "User stored successfully",
            id: docRef.id,
            user: value
        });

    } catch (error) {
        console.error("Firestore error:", error);

        res.status(500).json({
            message: "Failed to store user",
            error: error.message
        });
    }
});

module.exports = router;
