import express from "express";
import bodyParser from "body-parser";
import todoRoute from './routes/todos'
const app = express()
app.use(bodyParser.json());
app.use(todoRoute);
app.listen(7000);
app.listen(3000)