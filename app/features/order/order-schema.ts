import { z } from 'zod';

export const orderSchema = z
  .object({
    fulfillmentType: z.enum(['delivery', 'pickup']),
    name: z.string().min(2, 'Podaj imię i nazwisko'),
    phone: z
      .string()
      .min(9, 'Podaj numer telefonu')
      .regex(/^\+?[\d\s\-()]+$/, 'Nieprawidłowy numer telefonu'),
    locality: z.string().optional(),
    street: z.string().optional(),
    zip: z.string().optional(),
    apartment: z.string().optional(),
    notes: z.string().optional(),
    payment: z.enum(['cash', 'card']),
  })
  .superRefine((data, ctx) => {
    if (data.fulfillmentType !== 'delivery') {
      return;
    }

    if (!data.locality) {
      ctx.addIssue({ code: 'custom', message: 'Wybierz miejscowość', path: ['locality'] });
    }
    if (!data.street || data.street.trim().length < 2) {
      ctx.addIssue({ code: 'custom', message: 'Podaj ulicę i numer domu', path: ['street'] });
    }
    if (!data.zip || data.zip.trim() === '') {
      ctx.addIssue({ code: 'custom', message: 'Podaj kod pocztowy', path: ['zip'] });
    } else if (!/^\d{2}-\d{3}$/.test(data.zip.trim())) {
      ctx.addIssue({ code: 'custom', message: 'Format: XX-XXX', path: ['zip'] });
    }
  });
