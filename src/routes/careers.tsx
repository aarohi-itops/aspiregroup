import { createFileRoute } from '@tanstack/react-router';
import { CareersPage } from '@/components/aspire/pages';
export const Route = createFileRoute('/careers')({
 head: () => ({ meta: [{title: 'Careers & CV Submission | Aspire Qatar'}, {name:'description',content:'Share your CV and career aspirations with Aspire’s talent network in Doha, Qatar.'}, {property:'og:title',content:'Careers & CV Submission | Aspire Qatar'}, {property:'og:description',content:'Share your CV and career aspirations with Aspire’s talent network in Doha, Qatar.'}, {property:'og:type',content:'website'}, {property:'og:url',content:'/careers'}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:'/careers'}] }),
 component: CareersPage,
});
