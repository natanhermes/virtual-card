import { z } from 'zod';

const linkedinRegex = /linkedin\.com\/.{2,}/;
const githubRegex = /github\.com\/.{3,}/;

export const generateFormSchema = z.object({
  name: z.string().nonempty({ message: 'Please enter your name.' }),
  linkedinUrl: z
    .string()
    .url({ message: 'Please enter a valid LinkedIn URL' })
    .refine((value) => linkedinRegex.test(value), {
      message: 'Please enter a LinkedIn profile URL',
    }),
  githubUrl: z
    .string()
    .url({ message: 'Please enter a valid GitHub URL' })
    .refine((value) => githubRegex.test(value), {
      message: 'Please enter a GitHub profile URL',
    }),
  description: z
    .string()
    .min(100, { message: 'Write at least 100 characters about yourself' }),
});
