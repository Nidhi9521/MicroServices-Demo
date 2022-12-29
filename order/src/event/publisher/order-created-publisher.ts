import { Subjects,Publisher,OrderCreatedEvent } from "@nidhi9521/common_demo";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.orderCreated=Subjects.orderCreated;
}