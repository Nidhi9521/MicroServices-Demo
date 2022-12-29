
import express from 'express';
import { orderDomain } from '../domain/order-domain';

const router = express.Router();

//ADMIN Middleware check pending

// order create
router.post('/api/order/create',orderDomain.createorder);

// get all order
router.get('/api/order/get',orderDomain.getorder);
router.get('/api/order/get/:id',orderDomain.getorderId);



export { router as orderRouter };
