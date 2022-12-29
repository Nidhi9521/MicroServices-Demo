
import express from 'express';
import { orderDomain } from '../domain/order-domain';

const router = express.Router();

//ADMIN Middleware check pending

// order create
router.post('/api/order/create',orderDomain.createorder);

// order update
router.put('/api/order/update/:id',orderDomain.updateorder)
 
// delete order
router.delete('/api/order/delete/:id',orderDomain.deleteorder);

// get all order
router.get('/api/order/get',orderDomain.getorder);
router.get('/api/order/get/:id',orderDomain.getorderId);



export { router as orderRouter };
