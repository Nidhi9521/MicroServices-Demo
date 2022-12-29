import { Message } from "node-nats-streaming";
import { Subjects,Listener,ProductUpdatedEvent } from "@nidhi9521/common_demo"
import { queueGroup } from "./queue-group-name";
import { Product } from "../../connection/central-connection";


export class ProductUpdateListener extends Listener<ProductUpdatedEvent>{
    queueGroupName=queueGroup;
    subject: Subjects.productUpdated=Subjects.productUpdated;
    async onMessage(data:ProductUpdatedEvent['data'],msg:Message){
         const {id,name,quantity,basePrice}=data
         await Product.findByIdAndUpdate(id, {
            name: name,
            basePrice: basePrice,
            quantity: quantity
        });
         msg.ack();
    }
}
    