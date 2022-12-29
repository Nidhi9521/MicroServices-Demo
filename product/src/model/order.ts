import mongoose, { ObjectId } from "mongoose";
import { Order } from "../connection/central-connection";
import { ProductDoc } from "./product";

// intetface that describe the prooerties
// that are required to cretae new user
export interface OrderAttrs {
    customerName:string,
    productId:[
        {
            _id:string,
            qty:number,
        }
    ],
    totalPrice:number
}

// interface for usermodel pass
export interface OrderModel extends mongoose.Model<OrderDoc> {
    build(attrs: OrderAttrs): OrderDoc;
}

// interface for single user properties
export interface OrderDoc extends mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    customerName:string,
    productId:[{_id:ProductDoc,qty:number}],
    totalPrice:{type:Number},
}

export const OrderSchema = new mongoose.Schema({
    customerName: { type: String, },
    productId:[{_id:{type:String,ref:'product'},qty:{type:Number,default:0}}],
    totalPrice:{type:Number},
    createdAt: { type: Date, default: () => Date.now() },
    updatedAt: { type: Date, default: () => Date.now() },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.OrderId = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.created_at;
            delete ret.updated_at;
        },
    }
});

OrderSchema.pre('save', async function (done) {
})

OrderSchema.pre('update', async function (done) {
})

OrderSchema.statics.build = (attrs: OrderAttrs) => {
    return new Order(attrs);
}

// const Order = mongoose.model<OrderDoc, OrderModel>('Order', OrderSchema);

// export { Order };