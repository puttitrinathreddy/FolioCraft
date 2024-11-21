// src/components/Portfolio/ProjectsSection.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { addProject, removeProject } from '@/redux/slices/PortfolioSlice';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {  Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.portfolio.projects);


  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });

  const handleAddProject = () => {
    if (newProject.title.trim() && newProject.description.trim() && newProject.link.trim()) {
        dispatch(addProject({
            ...newProject,
            id: crypto.randomUUID()
          }));
     setNewProject({
              title: '', description: '', link: ''
         });
    }
  };

  const handleRemoveProject = (id: string) => {
    dispatch(removeProject(id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-gray-700">Project Title</label>
        <Input
          id="title"
          name="title"
          type="text"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          className="input input-bordered w-full"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-gray-700">Project Description</label>
        <Textarea
          id="description"
          name="description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="textarea textarea-bordered w-full"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="link" className="text-sm font-medium text-gray-700">Project Link</label>
        <Input
          id="link"
          name="link"
          type="text"
          value={newProject.link}
          onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
          className="input input-bordered w-full"
        />
      </div>

      <Button
        type="button"
        onClick={handleAddProject}
        variant="default"
        className="w-full mt-4"
      >
        Add Project
      </Button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Your Projects</h3>
        <ul className="space-y-4 mt-2">
          {projects.map((project) => (
            <li key={project.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm">
              <div className="space-y-2">
                <strong className="block text-lg">{project.title}</strong>
                <p className="text-sm">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
              <button
                onClick={() => handleRemoveProject(project.id)}
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

export default ProjectsSection;
