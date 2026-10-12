import { createFileRoute } from '@tanstack/react-router';
import { PrivacyPage } from '@/components/aspire/pages';
export const Route = createFileRoute('/privacy-policy')({
 head: () => ({ meta: [{title: 'Privacy Policy | Aspire Management Consulting'}, {name:'description',content:'Learn how Aspire handles contact inquiries, employer requests, and candidate CV information.'}, {property:'og:title',content:'Privacy Policy | Aspire Management Consulting'}, {property:'og:description',content:'Learn how Aspire handles contact inquiries, employer requests, and candidate CV information.'}, {property:'og:type',content:'website'}, {property:'og:url',content:'/privacy-policy'}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:'/privacy-policy'}] }),
 component: PrivacyPage,
});
