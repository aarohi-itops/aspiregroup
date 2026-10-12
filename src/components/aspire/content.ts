import { UsersRound, BriefcaseBusiness, Globe2, UserRoundSearch, Building2, HardHat, HeartPulse, Hotel, Truck, Monitor, Settings, ShoppingBag, Linkedin, Facebook, Instagram } from 'lucide-react';
import { TikTokIcon } from './tiktok-icon';
export const navItems = [ ['Home','/'], ['About Us','/about'], ['Services','/services'], ['Industries','/industries'], ['Our Process','/recruitment-process'], ['Careers','/careers'], ['Contact Us','/contact'] ] as const;
export const services = [
 { icon:UsersRound, title:'Permanent Recruitment', text:'Connect with skilled professionals who align with your goals, culture, and long-term vision.' },
 { icon:BriefcaseBusiness, title:'Executive Search', text:'Find forward-thinking leaders with the experience and perspective to move your business ahead.' },
 { icon:Globe2, title:'International Recruitment', text:'Expand your talent search beyond borders with a coordinated, people-first hiring approach.' },
 { icon:UserRoundSearch, title:'Workforce Solutions', text:'Build a workforce around your project requirements, operational priorities, and changing needs.' },
];
export const industries = [
 {icon:HardHat,title:'Construction & Engineering', text:'Technical specialists, project teams, and skilled professionals for the built environment.'},
 {icon:Settings,title:'Oil, Gas & Energy',text:'Talent for energy operations, technical functions, and essential support roles.'},
 {icon:HeartPulse,title:'Healthcare',text:'Clinical, administrative, and support professionals for patient-focused organizations.'},
 {icon:Hotel,title:'Hospitality',text:'People who bring service excellence to hotels, restaurants, and guest experiences.'},
 {icon:Truck,title:'Logistics & Transportation',text:'Teams to support supply chains, warehousing, and transportation operations.'},
 {icon:Monitor,title:'IT & Technology',text:'Technology professionals for digital operations, development, and business transformation.'},
 {icon:Building2,title:'Facilities Management',text:'Skilled personnel for maintenance, property operations, and facilities services.'},
 {icon:ShoppingBag,title:'Retail & Commercial',text:'Customer-facing, commercial, and operational talent for growing businesses.'},
];
export const steps = [
 ['Understand','We listen to your goals and define the skills, experience, and cultural fit you need.'],
 ['Source','We identify relevant talent through a focused search and candidate outreach.'],
 ['Assess','We review experience, shortlist candidates, and coordinate your interviews.'],
 ['Connect','We support selection and onboarding to help your new team get started.'],
];
export const socialLinks = [
 { name:'LinkedIn', href:'https://www.linkedin.com/company/aspire-qatar', icon:Linkedin },
 { name:'Facebook', href:'https://www.facebook.com/aspire.qatar', icon:Facebook },
 { name:'Instagram', href:'https://www.instagram.com/aspire.qatar/', icon:Instagram },
 { name:'TikTok', href:'https://www.tiktok.com/@aspire.management', icon:TikTokIcon },
] as const;
