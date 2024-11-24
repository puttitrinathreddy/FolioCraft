// src/components/PortfolioBuilder/Builder/constants.ts


import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';  
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import SocialSection from './components/SocialSection';
import AchievementsSection from './components/AchievementsSection';


export const AVAILABLE_COMPONENTS = [
    { id: 'header', type: 'header', title: 'Header Section', component: HeaderSection },
    { id: 'about', type: 'about', title: 'About Section', component: AboutSection },
    { id: 'skills', type: 'skills', title: 'Skills Section', component: SkillsSection },
    { id: 'projects', type: 'projects', title: 'Projects Section', component: ProjectsSection },
    { id: 'experience', type: 'experience', title: 'Experience Timeline', component: ExperienceSection },
    { id: 'contact', type: 'contact', title: 'Contact Form', component: ContactSection },
    { id: 'testimonials', type: 'testimonials', title: 'Testimonials', component: TestimonialsSection },
    { id: 'gallery', type: 'gallery', title: 'Image Gallery', component: GallerySection },
    { id: 'social', type: 'social', title: 'Social Links', component: SocialSection },
    { id: 'achievements', type: 'achievements', title: 'Achievements', component: AchievementsSection }
  ];
  