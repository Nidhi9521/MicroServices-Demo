import { Subjects } from '../enums/subjects';

export interface OrderUpdatedEvent {
    subject: Subjects.orderUpdated;
    data: {
        id: string;
        customerName: string,
        productId: {_id:string,qty:number,subTotal:number}[],
        totalPrice: number,
    };
}
