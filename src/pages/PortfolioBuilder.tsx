// src/pages/PortfolioBuilder.tsx
import PersonalInfoForm from '@/components/Portfolio/PersonalInfoForm';
import SkillsSection from '@/components/Portfolio/SkillsSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';

const PortfolioBuilder = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800">Portfolio Builder</h1>
      <PersonalInfoForm />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default PortfolioBuilder;
