import type { z } from 'zod';
import type { orderSchema } from './order-schema';
import type { allPizzas, deliveryAreas } from './order-data';

export type OrderFormData = z.infer<typeof orderSchema>;
export type Pizza = (typeof allPizzas)[number];
export type DeliveryArea = (typeof deliveryAreas)[number];

export interface CartItem {
  pizza: Pizza;
  quantity: number;
}
