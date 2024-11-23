import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { addSkill, removeSkill, updateSkill } from '@/redux/slices/portfolioSlice';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface NewSkill {
  name: string;
  level: number;
  category: string;
}

const SKILL_CATEGORIES = [
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Mobile',
  'Other'
] as const;

const SkillsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const skills = useSelector((state: RootState) => state.portfolio.skills);

  const [newSkill, setNewSkill] = useState<NewSkill>({
    name: '',
    level: 3,
    category: 'Other',
  });

  const [error, setError] = useState<string>('');

  const handleAddSkill = () => {
    if (!newSkill.name.trim()) {
      setError('Skill name is required');
      return;
    }

    try {
      dispatch(addSkill({
        id: crypto.randomUUID(),
        name: newSkill.name.trim(),
        level: newSkill.level,
        category: newSkill.category,
      }));

      // Reset form
      setNewSkill({
        name: '',
        level: 3,
        category: 'Other',
      });
      setError('');
    } catch (err) {
      setError('Failed to add skill. Please try again.');
    }
  };

  const handleRemoveSkill = (id: string) => {
    try {
      dispatch(removeSkill(id));
    } catch (err) {
      setError('Failed to remove skill. Please try again.');
    }
  };

  const handleUpdateSkillLevel = (id: string, level: number) => {
    try {
      dispatch(updateSkill({ id, updates: { level } }));
    } catch (err) {
      setError('Failed to update skill level. Please try again.');
    }
  };

  return (
    <motion.div
      className="space-y-6 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="skillName" className="text-sm font-medium text-gray-700">
            Skill Name *
          </label>
          <Input
            id="skillName"
            value={newSkill.name}
            onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter skill name"
            className="w-full"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Category
          </label>
          <Select
            value={newSkill.category}
            onValueChange={(value) => setNewSkill(prev => ({ ...prev, category: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {SKILL_CATEGORIES.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Proficiency Level: {newSkill.level}
        </label>
        <Slider
          value={[newSkill.level]}
          min={1}
          max={5}
          step={1}
          onValueChange={([value]) => setNewSkill(prev => ({ ...prev, level: value }))}
          className="w-full"
        />
      </div>

      <Button
        onClick={handleAddSkill}
        className="w-full"
      >
        Add Skill
      </Button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Your Skills</h3>
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.values(SKILL_CATEGORIES).map(category => {
              const categorySkills = skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-3"
                >
                  <h4 className="font-medium text-gray-900">{category}</h4>
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      layout
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{skill.name}</div>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                  index < skill.level
                                    ? 'bg-blue-500'
                                    : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveSkill(skill.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SkillsSection;