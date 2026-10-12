import { z } from 'zod';
export const inquirySchema = z.object({
  kind: z.enum(['contact', 'employer', 'cv']),
  name: z.string().trim().min(2, 'Please enter your full name.').max(100),
  email: z.string().trim().email('Please enter a valid email address.').max(254),
  phone: z.string().trim().max(40).default(''),
  company: z.string().trim().max(150).default(''),
  industry: z.string().trim().max(100).default(''),
  message: z.string().trim().min(10, 'Please include at least 10 characters.').max(3000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please agree to the privacy policy.' }) }),
  website: z.string().max(0, 'Unable to submit this request.').default(''),
}).superRefine((data, ctx) => { if(data.kind === 'employer' && !data.company) ctx.addIssue({ code:'custom', path:['company'], message:'Please enter your company name.' }); });
export const MAX_CV_SIZE = 5 * 1024 * 1024;
export function validateCV(file: { name: string; size: number }) {
  if (!/\.pdf$/i.test(file.name)) return 'Please upload your CV as a PDF.';
  if (file.size === 0 || file.size > MAX_CV_SIZE) return 'Your PDF must be between 1 byte and 5 MB.';
  return null;
}
