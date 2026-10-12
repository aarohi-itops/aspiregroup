import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/aspire/pages';
export const Route = createFileRoute('/services')({
 head: () => ({ meta: [{title: 'Recruitment Services | Aspire Qatar'}, {name:'description',content:'Explore permanent recruitment, executive search, international recruitment, and workforce solutions with Aspire.'}, {property:'og:title',content:'Recruitment Services | Aspire Qatar'}, {property:'og:description',content:'Explore permanent recruitment, executive search, international recruitment, and workforce solutions with Aspire.'}, {property:'og:type',content:'website'}, {property:'og:url',content:'/services'}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:'/services'}] }),
 component: ServicesPage,
});
