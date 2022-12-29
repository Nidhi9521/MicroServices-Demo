import { Subjects } from '../enums/subjects';

export interface ProductUpdatedEvent {
  subject: Subjects.productUpdated;
  data: {
    id: string;
    name: string;
    basePrice: number;
    quantity: number;
  };
}
