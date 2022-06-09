import "reflect-metadata";
import './config/env';
import {createConnection} from 'typeorm';
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import routes from "./routes";
import { userAcount } from "./entity/userAcount";

const app = express();

createConnection({
    type: "mysql",
    host: "eyvqcfxfxxxxxxxxxxxxxxxxxxxxxxom",
    port: 3306,
    username: "vlnuxxxxxxxxxxxxxc",
    password: "okaomfxxxxxxxxxl",
    database: "hsnh6axxxxxxxxxbl",
    entities: [
        userAcount
    ],
    synchronize: true,
    logging: false
}).then(connection => {

}).catch(error => console.log(error));

app.use(cors());

app.use(bodyParser.json());
app.use(routes);


app.listen(process.env.PORT || 1337);
