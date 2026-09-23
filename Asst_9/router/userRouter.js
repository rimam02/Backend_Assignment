const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/userModel");

const router = express.Router();

// PATCH - Update User
router.patch("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Check if ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        // Find and update user
        const user = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        // User not found
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        console.log("User updated successfully");

        res.status(200).json({
            message: "User updated successfully",
            user: user
        });

    } catch (error) {
        console.error("Update error:", error);

        res.status(500).json({
            message: "Database error",
            error: error.message
        });
    }
});


// DELETE - Delete User
router.delete("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Check if ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        // Find and delete user
        const user = await User.findByIdAndDelete(id);

        // User not found
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        console.log("User deleted successfully");

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        console.error("Delete error:", error);

        res.status(500).json({
            message: "Database error",
            error: error.message
        });
    }
});

module.exports = router;
