import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/aspire/pages';
export const Route = createFileRoute('/about')({
 head: () => ({ meta: [{title: 'About Us | Aspire Management Consulting'}, {name:'description',content:'Meet Aspire Management Consulting W.L.L., a Doha-based recruitment and workforce consulting company.'}, {property:'og:title',content:'About Us | Aspire Management Consulting'}, {property:'og:description',content:'Meet Aspire Management Consulting W.L.L., a Doha-based recruitment and workforce consulting company.'}, {property:'og:type',content:'website'}, {property:'og:url',content:'/about'}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:'/about'}] }),
 component: AboutPage,
});
