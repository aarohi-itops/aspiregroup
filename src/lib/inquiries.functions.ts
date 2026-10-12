import { createServerFn } from '@tanstack/react-start';
import { inquirySchema, validateCV } from './form-schema';
export const submitInquiry = createServerFn({ method: 'POST' })
.inputValidator((input: FormData) => {
  const data = inquirySchema.parse({ ...Object.fromEntries(input.entries()), consent: input.get('consent') === 'true' });
  const cv = input.get('cv');
  if (data.kind === 'cv') {
    if (!(cv instanceof File)) throw new Error('Please attach your CV.');
    const error = validateCV(cv); if (error) throw new Error(error);
  }
  return { ...data, cv: cv instanceof File ? cv : null };
})
.handler(async ({ data }) => {
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const bytes = new TextEncoder().encode(data.email.toLowerCase());
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const key = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2,'0')).join('');
  const { data: allowed, error: rateError } = await supabaseAdmin.rpc('accept_form_request', { input_key: key });
  if (rateError) throw new Error('We could not save your request. Please try again or email info@aspiregroupglobal.com.');
  if (!allowed) throw new Error('Too many requests. Please try again in an hour or contact us by email.');
  const id = crypto.randomUUID();
  let cvPath: string | null = null;
  if (data.kind === 'cv' && data.cv) {
    const fileBytes = new Uint8Array(await data.cv.arrayBuffer());
    if (new TextDecoder().decode(fileBytes.slice(0,5)) !== '%PDF-') throw new Error('This file is not a valid PDF.');
    cvPath = `${id}/cv.pdf`;
    const { error } = await supabaseAdmin.storage.from('candidate-cvs').upload(cvPath, fileBytes, {contentType:'application/pdf', upsert:false});
    if (error) throw new Error('Your CV could not be uploaded. Please try again.');
  }
  const base = { id, name: data.name, email: data.email, phone: data.phone, message: data.message };
  const result = data.kind === 'contact' ? await supabaseAdmin.from('contact_submissions').insert(base)
    : data.kind === 'employer' ? await supabaseAdmin.from('employer_inquiries').insert({...base, company:data.company, industry:data.industry})
    : await supabaseAdmin.from('cv_submissions').insert({...base, industry:data.industry, cv_path:cvPath ?? ''});
  if (result.error) {
    if (cvPath) await supabaseAdmin.storage.from('candidate-cvs').remove([cvPath]);
    throw new Error('Your request could not be saved. Please try again or contact us by email.');
  }
  return { saved: true, reference: id };
});
