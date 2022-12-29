import mongoose from 'mongoose';
import { OrderDoc, OrderModel, OrderSchema } from '../model/order';
import { ProductDoc, ProductModel, ProductSchema } from '../model/product';


let centralMongoCon: mongoose.Connection;
let Order: OrderModel;
let Product: ProductModel;

export function mongoCentralCon(uri: string) {
    console.log("uri: ", uri);
    
    centralMongoCon = mongoose.createConnection(uri);
    Order = centralMongoCon.model<OrderDoc, OrderModel>('Order', OrderSchema);
    Product = centralMongoCon.model<ProductDoc, ProductModel>('product', ProductSchema);
}

export { centralMongoCon, Product,Order };