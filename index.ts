import express from 'express';
import bodyParser from "body-parser";
import {logger} from "./src/logger/winston";

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        res.end('hello')
        throw new Error('error test winston')
    } catch (err) {
        logger.error(err)
    }
})

app.listen(3000, () => {
    console.log("server listening on 3000")
})