import { Subjects } from '../enums/subjects';

export interface OrderCreatedEvent {
    subject: Subjects.orderCreated;
    data: {
        id: string;
        customerName: string,
        productId: {_id:string,qty:number,subTotal:number}[],
        totalPrice: number,
    };
}
