import { Message } from "node-nats-streaming";
import { Subjects,Listener,ProductCreatedEvent } from "@nidhi9521/common_demo"
import { queueGroup } from "./queue-group-name";
import { Product } from "../../connection/central-connection";


export class ProductCreatedListener extends Listener<ProductCreatedEvent>{
    queueGroupName=queueGroup;
    subject: Subjects.productCreated=Subjects.productCreated;
    async onMessage(data:ProductCreatedEvent['data'],msg:Message){
         const {id,name,quantity,basePrice}=data
         console.log('central product start');
         
         const productData = Product.build({
            name: name,
            basePrice: basePrice,
            quantity: quantity
        })
        productData.id=id;
        await productData.save();
        console.log('central product saved');
         msg.ack();
    }
}
    