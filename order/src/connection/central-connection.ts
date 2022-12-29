import mongoose from 'mongoose';
import { OrderDoc, OrderModel, OrderSchema } from '../model/order';
import { ProductDoc, ProductModel, ProductSchema } from '../model/product';


let centralMongoCon: mongoose.Connection;
let Product: ProductModel;
let OrderCentral: OrderModel;
export function mongoCentralCon(uri: string) {
    console.log("uri: ", uri);
    
    centralMongoCon = mongoose.createConnection(uri);
    Product = centralMongoCon.model<ProductDoc, ProductModel>('Product', ProductSchema);
    OrderCentral = centralMongoCon.model<OrderDoc, OrderModel>('Order', OrderSchema);
}

export { centralMongoCon, Product, OrderCentral};