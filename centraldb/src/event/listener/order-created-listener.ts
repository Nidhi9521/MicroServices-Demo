import { Message } from "node-nats-streaming";
import { Subjects,Listener,OrderCreatedEvent } from "@nidhi9521/common_demo"
import { queueGroup } from "./queue-group-name";
import { Order, Product } from "../../connection/central-connection";


export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    queueGroupName=queueGroup;
    subject: Subjects.orderCreated=Subjects.orderCreated;
    async onMessage(data:OrderCreatedEvent['data'],msg:Message){
         const {id,productId,customerName,totalPrice}=data
         const productData = Order.build({
             customerName: customerName,
             productId: productId,
             totalPrice: totalPrice
         })
         productData.id=id;
         await productData.save();
         msg.ack();
    }
}
    