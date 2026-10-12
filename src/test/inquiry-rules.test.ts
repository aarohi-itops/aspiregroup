import { describe, expect, it } from 'vitest';
import { inquirySchema, validateCV } from '@/lib/form-schema';
const valid={kind:'employer',name:'Test Person',email:'test@example.com',company:'Test Company',message:'A real hiring requirement',consent:true};
describe('Honest submission rules',()=>{
 it('requires consent before storing a submission',()=>{expect(inquirySchema.safeParse({...valid,consent:false}).success).toBe(false);});
 it('requires a company for employer requests',()=>{expect(inquirySchema.safeParse({...valid,company:''}).success).toBe(false);});
 it('rejects invalid email addresses',()=>{expect(inquirySchema.safeParse({...valid,email:'not-email'}).success).toBe(false);});
 it('rejects honeypot submissions',()=>{expect(inquirySchema.safeParse({...valid,website:'spam'}).success).toBe(false);});
 it('requires a PDF CV',()=>{expect(validateCV({name:'cv.exe',size:100})).not.toBeNull();expect(validateCV({name:'cv.pdf',size:100})).toBeNull();});
});
