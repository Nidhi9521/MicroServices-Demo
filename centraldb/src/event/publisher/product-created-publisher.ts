import { Subjects,Publisher,ProductCreatedEvent } from "@nidhi9521/common_demo";

export class ProductCreatedPublisher extends Publisher<ProductCreatedEvent>{
    subject: Subjects.productCreated=Subjects.productCreated;
}