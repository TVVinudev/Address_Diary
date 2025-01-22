import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRoute from './Routes/MainRoute.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true 
}));
app.use(json());


app.use('/', mainRoute);

const port = process.env.PORT || 5000; 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
