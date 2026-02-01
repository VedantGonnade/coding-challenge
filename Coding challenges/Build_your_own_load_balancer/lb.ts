import express from "express";
import axios from "axios";

const app = express();
const PORT = 8080;
const HOST = "localhost";

const BACKEND_SERVER = "http://localhost:3000";

app.use((req, res, next) => {
    console.log(`Received request from ${req.ip}`);
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(`Host: ${req.get('host')}`);
    console.log(`User-Agent: ${req.get('user-agent')}`);
    console.log(`Accept: ${req.get('accept')}`);
    console.log('');
    next();
});

app.use(async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `${BACKEND_SERVER}${req.url}`,
            headers: req.headers,
            data: req.body
        });
        res.status(response.status).set(response.headers).send(response.data);
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Load balancer running at http://${HOST}:${PORT}/`);
    console.log(`Forwarding requests to ${BACKEND_SERVER}`);
});

export { app };