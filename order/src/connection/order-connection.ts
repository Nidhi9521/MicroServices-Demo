import mongoose from 'mongoose';
import { OrderDoc, OrderModel, OrderSchema } from '../model/order';

let orderMongoCon: mongoose.Connection;
let Order: OrderModel;

export function mongoOrderCon(uri: string) {
    console.log("uri: ", uri);
    
    orderMongoCon = mongoose.createConnection(uri);
    Order = orderMongoCon.model<OrderDoc, OrderModel>('Order', OrderSchema);

}

export { orderMongoCon, Order };