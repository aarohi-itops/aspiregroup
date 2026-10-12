import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/aspire/pages';
export const Route = createFileRoute('/contact')({
 head: () => ({ meta: [{title: 'Contact Us | Aspire Doha'}, {name:'description',content:'Contact Aspire Management Consulting W.L.L. in Doha at info@aspiregroupglobal.com.'}, {property:'og:title',content:'Contact Us | Aspire Doha'}, {property:'og:description',content:'Contact Aspire Management Consulting W.L.L. in Doha at info@aspiregroupglobal.com.'}, {property:'og:type',content:'website'}, {property:'og:url',content:'/contact'}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:'/contact'}] }),
 component: ContactPage,
});
