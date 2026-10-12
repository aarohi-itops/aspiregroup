import { createFileRoute } from '@tanstack/react-router';
import { IndustriesPage } from '@/components/aspire/pages';
export const Route = createFileRoute('/industries')({
 head: () => ({ meta: [{title: 'Industries We Serve | Aspire Qatar'}, {name:'description',content:'Industry-focused talent solutions for construction, energy, healthcare, hospitality, technology, and more.'}, {property:'og:title',content:'Industries We Serve | Aspire Qatar'}, {property:'og:description',content:'Industry-focused talent solutions for construction, energy, healthcare, hospitality, technology, and more.'}, {property:'og:type',content:'website'}, {property:'og:url',content:'/industries'}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:'/industries'}] }),
 component: IndustriesPage,
});
