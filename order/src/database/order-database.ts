
import { OrderCentral, Product } from '../connection/central-connection';
import { Order } from '../connection/order-connection';
import { OrderCreatedPublisher } from '../event/publisher/order-created-publisher';
import { ProductUpdatedPublisher } from '../event/publisher/product-updated-publisher';
import { natsWrapper } from '../nats-wrapper';

export class orderDatabaseLayer {

    static async createorder(req: any) {
        const { customerName, productId } = req.body;
        var totalPrice: number = 0;
        var productDataRes: {_id:string,qty:number,subTotal:number}[] = [];
        await Promise.all(productId.map(async (e: any) => {
            const productData = await Product.findById(e.id);
            if (productData) {
                if (productData.quantity >= e.qty) {

                    totalPrice = totalPrice + (e.qty * productData.basePrice);
                    productDataRes.push({ _id: e.id, qty: e.qty, subTotal: (e.qty * productData.basePrice) })

                }
            }
        }))
        const data = Order.build({
            customerName: customerName,
            productId:productDataRes,
            totalPrice: totalPrice
        })
        await data.save();
        await Promise.all(productId.map(async (e: any) => {
            const productData = await Product.findById(e.id);
            if (productData) {
                let qty=productData.quantity-e.qty;
                await Product.findByIdAndUpdate(e.id,{quantity:qty})
                await new ProductUpdatedPublisher(natsWrapper.client).publish({
                    id: e.id,
                    name: productData.name,
                    basePrice: productData.basePrice,
                    quantity: qty
                })
            }
        }))
        await new OrderCreatedPublisher(natsWrapper.client).publish({
            id: data.id,
            customerName: data.customerName,
            productId:productDataRes,
            totalPrice: totalPrice
        })
        return;
    }

    static async getorderById(req: any, id: string) {
        const data = await OrderCentral.findById(id);
        if (data) {
            return data;
        }
    }

    static async getorder() {
        const data = await OrderCentral.find();
        return data;
    }

}