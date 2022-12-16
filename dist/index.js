"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const winston_1 = require("./src/logger/winston");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    try {
        res.end('hello');
        throw new Error('error test winston');
    }
    catch (err) {
        winston_1.logger.error(err);
    }
});
app.listen(3000, () => {
    console.log("server listening on 3000");
});
//# sourceMappingURL=index.js.map