import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB config 
const db = require('./config/keys').mongoURI