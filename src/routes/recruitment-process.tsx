import { createFileRoute } from '@tanstack/react-router';
import { ProcessPage } from '@/components/aspire/pages';
export const Route = createFileRoute('/recruitment-process')({
 head: () => ({ meta: [{title: 'Our Recruitment Process | Aspire'}, {name:'description',content:'Discover Aspire’s four-step recruitment approach: understand, source, assess, and connect.'}, {property:'og:title',content:'Our Recruitment Process | Aspire'}, {property:'og:description',content:'Discover Aspire’s four-step recruitment approach: understand, source, assess, and connect.'}, {property:'og:type',content:'website'}, {property:'og:url',content:'/recruitment-process'}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:'/recruitment-process'}] }),
 component: ProcessPage,
});
