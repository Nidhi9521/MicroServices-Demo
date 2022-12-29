
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { orderDatabaseLayer } from '../database/order-database';

export class orderDomain {

    static async createorder(req: Request, res: Response) {
        const order = await orderDatabaseLayer.createorder(req);
        res.status(201).send(order);
    }

    static async updateorder(req: Request, res: Response) {
        await orderDatabaseLayer.updateorder(req,req.params.id);
        res.status(201).send({ updated: true });
    }

    static async deleteorder(req: Request, res: Response) {
        await orderDatabaseLayer.deleteorder(req,req.params.id);
        res.status(201).send({ deleted: true });
    }

    static async getorderId(req: Request, res: Response) {
        const order =  await orderDatabaseLayer.getorderById(req,req.params.id);
        res.status(201).send(order);
    }
    
    static async getorder(req: Request, res: Response) {
        const order =  await orderDatabaseLayer.getorder();
        res.status(201).send(order);
    }


}