import { createFileRoute } from '@tanstack/react-router';
import { EmployersPage } from '@/components/aspire/pages';
export const Route = createFileRoute('/for-employers')({
 head: () => ({ meta: [{title: 'Request Talent | Aspire for Employers'}, {name:'description',content:'Tell Aspire about your hiring needs and connect with recruitment support tailored to your business.'}, {property:'og:title',content:'Request Talent | Aspire for Employers'}, {property:'og:description',content:'Tell Aspire about your hiring needs and connect with recruitment support tailored to your business.'}, {property:'og:type',content:'website'}, {property:'og:url',content:'/for-employers'}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:'/for-employers'}] }),
 component: EmployersPage,
});
