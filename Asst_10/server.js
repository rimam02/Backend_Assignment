const express = require("express");
const userRouter = require("./router/userRouter");

const app = express();
const PORT = 5002;

// Middleware to read JSON data
app.use(express.json());

// User routes
app.use("/api", userRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
