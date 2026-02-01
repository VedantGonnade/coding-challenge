import express from "express";

const app = express();
const PORT = 3000;
const HOST = "localhost";

app.get("/", (req, res) => {
    res.send(`Response from backend server on port ${PORT}`);
});

app.listen(PORT, HOST, () => {
    console.log(`Backend server running on http://${HOST}:${PORT}`);
});
