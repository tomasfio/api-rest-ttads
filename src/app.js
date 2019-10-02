import express, {json} from "express";
import morgan from 'morgan';

const mongoose = require('mongoose');

const app = express();

//  Import Routes
import CategoriaRouter from "./routes/categoria.routes";

//  Settings
app.set('port', process.env.PORT || 3000);

//  Middlerware
app.use(morgan('dev'));
app.use(json());

//  Router
app.use('/categoria',CategoriaRouter);

export default app;