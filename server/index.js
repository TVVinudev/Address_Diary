import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRoute from './Routes/MainRoute.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    Credential: true
}));
app.use(json());
app.use('/',mainRoute)


const port = process.env.PORT;


app.listen(port, () => {
    console.log('running port ', port);

});