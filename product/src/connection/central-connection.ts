import mongoose from 'mongoose';
import { OrderDoc, OrderModel, OrderSchema } from '../model/order';
import { ProductDoc, ProductModel, ProductSchema } from '../model/product';


let centralMongoCon: mongoose.Connection;
let Order: OrderModel;
let ProductCentral: ProductModel;

export function mongoCentralCon(uri: string) {
    console.log("uri: ", uri);
    
    centralMongoCon = mongoose.createConnection(uri);
    Order = centralMongoCon.model<OrderDoc, OrderModel>('Order', OrderSchema);
    ProductCentral = centralMongoCon.model<ProductDoc, ProductModel>('product', ProductSchema);
}

export { centralMongoCon, ProductCentral,Order };