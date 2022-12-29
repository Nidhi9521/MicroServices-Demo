import { Subjects,Publisher,ProductUpdatedEvent } from "@nidhi9521/common_demo";

export class ProductUpdatedPublisher extends Publisher<ProductUpdatedEvent>{
    subject: Subjects.productUpdated=Subjects.productUpdated;
}