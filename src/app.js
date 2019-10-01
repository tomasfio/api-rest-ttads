import express, {json} from "express";
import morgan from 'morgan';

const mongoose = require('mongoose');

const app = express();

//  Settings
app.set('port', process.env.PORT || 3000);

//  Middlerware
app.use(morgan('dev'));
app.use(json());

export default app;