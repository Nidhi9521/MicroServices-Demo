import mongoose from 'mongoose';
import { OrderDoc, OrderModel, OrderSchema } from '../model/order';


let centralMongoCon: mongoose.Connection;
let Order: OrderModel;

export function mongoCentralCon(uri: string) {
    console.log("uri: ", uri);
    
    centralMongoCon = mongoose.createConnection(uri);
    Order = centralMongoCon.model<OrderDoc, OrderModel>('Order', OrderSchema);
    
}

export { centralMongoCon, Order };