import express from "express";

const app = express();
const PORT = 8080;
const HOST = "localhost";

app.use((req, res, next) => {
    console.log(`Received request from ${req.ip}`);
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(`Host: ${req.get('host')}`);
    console.log(`User-Agent: ${req.get('user-agent')}`);
    console.log(`Accept: ${req.get('accept')}`);
    console.log('');
    next();
});

app.get("/", (req, res) => {
    res.send("Load balancer received your request");
});

app.listen(PORT, HOST, () => {
    console.log(`Load balancer running at http://${HOST}:${PORT}/`);
});

export { app };