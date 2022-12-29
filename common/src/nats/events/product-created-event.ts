import { Subjects } from '../enums/subjects';

export interface ProductCreatedEvent {
  subject: Subjects.productCreated;
  data: {
    id: string;
    name: string;
    basePrice: number;
    quantity: number;
  };
}
