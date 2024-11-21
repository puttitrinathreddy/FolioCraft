// src/components/Portfolio/SkillsSection.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { addSkill, removeSkill } from '@/redux/slices/PortfolioSlice';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

const SkillsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const skills = useSelector((state: RootState) => state.portfolio.skills);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      dispatch(addSkill(newSkill));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    dispatch(removeSkill(skill));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <label htmlFor="newSkill" className="text-sm font-medium text-gray-700">Add Skill</label>
        <Input
          id="newSkill"
          name="newSkill"
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      <Button
        type="button"
        onClick={handleAddSkill}
        variant="default"
        className="w-full mt-4"
      >
        Add Skill
      </Button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Your Skills</h3>
        <ul className="space-y-3 mt-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{skill}</span>
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
