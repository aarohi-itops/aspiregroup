import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/aspire/pages';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [{title: 'Aspire Management Consulting W.L.L. | Recruitment in Qatar'}, {name:'description',content:'Connecting exceptional talent with extraordinary opportunities. Recruitment and workforce solutions from Aspire in Doha, Qatar.'}, {property:'og:title',content:'Aspire Management Consulting W.L.L. | Recruitment in Qatar'}, {property:'og:description',content:'Connecting exceptional talent with extraordinary opportunities. Recruitment and workforce solutions from Aspire in Doha, Qatar.'}, {property:'og:type',content:'website'}, {property:'og:url',content:'/'}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:'/'}] }),
 component: HomePage,
});
