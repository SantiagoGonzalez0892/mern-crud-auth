import { z } from 'zod';


export const registerSchema = z.object({
  username: z.string({
    required_error: 'Username is required' }
  ).min(5, {
    message: 'username must contain at least 5 characters'
  }),
  email: z.string({
    required_error: 'Email is required' }
  ).email(),
  password: z.string({
    required_error: 'Password is required' }
  ).min(6 , {
    message: 'Password must contain at least 6 characters' 
  })
});

export const loginSchema = z.object({
  email: z.string({
    required_error: 'Email is required'
  }).email(),
  password: z.string({
    required_error: 'Password is required'
  }).min(6, {
    message: 'Password must contain at least 6 characters'
  })
});
