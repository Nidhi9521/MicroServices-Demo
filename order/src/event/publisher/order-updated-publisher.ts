import { Subjects,Publisher,OrderUpdatedEvent } from "@nidhi9521/common_demo";

export class OrderUpdatedPublisher extends Publisher<OrderUpdatedEvent>{
    subject: Subjects.orderUpdated=Subjects.orderUpdated;
}