import { z } from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).optional(),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  teacher_id: z.string().min(1, { message: 'Teacher ID is required' }).optional(),
  specialization: z.string().min(1, { message: 'Specialization is required' }).optional(),
});

export const studentregistrationschema = z.object({
  id: z.string(),
  name: z.string(),
  program: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  proposals_submitted: z.number().int().nonnegative(),
  proposals_approved: z.number().int().nonnegative(),
  completed: z.boolean(),
})