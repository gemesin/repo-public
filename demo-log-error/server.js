const express = require("express");
const morganMiddleware = require("./middlewares/morgan.middleware");

const logger = require("./utils/logger");

const app = express();

app.use(morganMiddleware);

app.get("/", (req, res) => {
    res.status(200).send({
        status: "OK",
        message: "Welcome to API Service!"
    });
});

app.get("/manual-log", (req, res) => {
    logger.info("this is manual logger info");
    logger.warn("this is manual logger warn");
    logger.error("this is manual logger error");
    
    res.status(200).send({
        status: "OK",
        message: "Check the log file for this message!"
    });
});

app.listen(3000, () => {
    logger.info('Server is running on port 3000');
});