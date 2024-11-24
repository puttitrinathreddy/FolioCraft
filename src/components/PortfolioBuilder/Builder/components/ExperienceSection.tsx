
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

const ExperienceSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [newExperience, setNewExperience] = useState<Experience>({
    id: '',
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    responsibilities: []
  });

  const handleAddExperience = () => {
    setExperiences((prev: any) => [...prev, { ...newExperience, id: crypto.randomUUID() }]);
    setNewExperience({
      id: '',
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
      responsibilities: []
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 p-4"
    >
      <h2 className="text-2xl font-bold">Experience</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Job Title</label>
          <Input
            value={newExperience.title}
            onChange={(e) => setNewExperience((prev: any) => ({
              ...prev,
              title: e.target.value
            }))}
            placeholder="Senior Developer"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Company</label>
          <Input
            value={newExperience.company}
            onChange={(e) => setNewExperience((prev: any) => ({
              ...prev,
              company: e.target.value
            }))}
            placeholder="Company Name"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Start Date</label>
          <Input
            type="date"
            value={newExperience.startDate}
            onChange={(e) => setNewExperience((prev: any) => ({
              ...prev,
              startDate: e.target.value
            }))}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">End Date</label>
          <Input
            type="date"
            value={newExperience.endDate}
            onChange={(e) => setNewExperience((prev: any) => ({
              ...prev,
              endDate: e.target.value
            }))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Description</label>
        <Textarea
          value={newExperience.description}
          onChange={(e) => setNewExperience((prev: any) => ({
            ...prev,
            description: e.target.value
          }))}
          placeholder="Describe your role and achievements"
        />
      </div>

      <Button onClick={handleAddExperience} className="w-full">
        Add Experience
      </Button>

      <div className="space-y-4 mt-6">
        {experiences.map((exp:any) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <h3 className="font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">
              {exp.startDate} - {exp.endDate}
            </p>
            <p className="mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
