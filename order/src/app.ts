import express from 'express';
import 'express-async-errors';
import { orderRouter } from './routes/order-routes';


const app = express();

// The reason for this that traffic is being prixy to our app through ingress nginx
app.set('trust proxy', true);
app.use(express.json());
app.use(orderRouter);


// Router


export { app };