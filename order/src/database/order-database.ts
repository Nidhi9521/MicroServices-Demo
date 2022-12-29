
import { Order } from '../connection/order-connection';
import { natsWrapper } from '../nats-wrapper';

export class orderDatabaseLayer {

    static async createorder(req: any) {

    }

    static async updateorder(req: any, id: string) {

    }

    static async deleteorder(req: any, id: string) {

    }

    static async getorderById(req: any, id: string) {
        const data = await Order.findById(id);
        if (data) {
            return data;
        } 
    }

    static async getorder() {
        const data = await Order.find();
        return data;
    }

}