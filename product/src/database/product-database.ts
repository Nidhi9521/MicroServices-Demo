
import { Product } from '../connection/product-connection';
import { natsWrapper } from '../nats-wrapper';

export class productDatabaseLayer {

    static async createproduct(req: any) {

    }

    static async updateproduct(req: any, id: string) {

    }

    static async deleteproduct(req: any, id: string) {

    }

    static async getproductById(req: any, id: string) {
        const data = await Product.findById(id);
        if (data) {
            return data;
        } 
    }

    static async getproduct() {
        const data = await Product.find();
        return data;
    }

}