import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { addProject, removeProject } from '@/redux/slices/portfolioSlice';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NewProject {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  technologies: string[];
  imageUrl?: string;
}

const ProjectsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.portfolio.projects);

  const [newProject, setNewProject] = useState<NewProject>({
    title: '',
    description: '',
    link: '',
    githubLink: '',
    technologies: [],
    imageUrl: '',
  });

  const [error, setError] = useState<string>('');

  const handleAddProject = () => {
    // Validation
    if (!newProject.title.trim()) {
      setError('Project title is required');
      return;
    }
    if (!newProject.description.trim()) {
      setError('Project description is required');
      return;
    }

    try {
      dispatch(addProject({
        ...newProject,
        id: crypto.randomUUID(),
      }));

      // Reset form
      setNewProject({
        title: '',
        description: '',
        link: '',
        githubLink: '',
        technologies: [],
        imageUrl: '',
      });
      setError('');
    } catch (err) {
      setError('Failed to add project. Please try again.');
    }
  };

  const handleRemoveProject = (id: string) => {
    try {
      dispatch(removeProject(id));
    } catch (err) {
      setError('Failed to remove project. Please try again.');
    }
  };

  const handleTechnologiesChange = (value: string) => {
    const techArray = value.split(',').map(tech => tech.trim());
    setNewProject(prev => ({ ...prev, technologies: techArray }));
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

      <div className="flex flex-col space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-gray-700">
          Project Title *
        </label>
        <Input
          id="title"
          name="title"
          value={newProject.title}
          onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
          placeholder="Enter project title"
          className="w-full"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-gray-700">
          Project Description *
        </label>
        <Textarea
          id="description"
          name="description"
          value={newProject.description}
          onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Describe your project"
          className="w-full min-h-[100px]"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="technologies" className="text-sm font-medium text-gray-700">
          Technologies (comma-separated)
        </label>
        <Input
          id="technologies"
          name="technologies"
          value={newProject.technologies.join(', ')}
          onChange={(e) => handleTechnologiesChange(e.target.value)}
          placeholder="React, TypeScript, Redux"
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="link" className="text-sm font-medium text-gray-700">
            Live Demo Link
          </label>
          <Input
            id="link"
            name="link"
            value={newProject.link}
            onChange={(e) => setNewProject(prev => ({ ...prev, link: e.target.value }))}
            placeholder="https://..."
            className="w-full"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="githubLink" className="text-sm font-medium text-gray-700">
            GitHub Link
          </label>
          <Input
            id="githubLink"
            name="githubLink"
            value={newProject.githubLink}
            onChange={(e) => setNewProject(prev => ({ ...prev, githubLink: e.target.value }))}
            placeholder="https://github.com/..."
            className="w-full"
          />
        </div>
      </div>

      <Button
        onClick={handleAddProject}
        className="w-full"
      >
        Add Project
      </Button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Your Projects</h3>
        <AnimatePresence>
          <motion.ul className="space-y-4 mt-2">
            {projects.map((project) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-between items-start bg-gray-50 p-4 rounded-md shadow-sm"
              >
                <div className="space-y-2">
                  <strong className="block text-lg">{project.title}</strong>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4">
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveProject(project.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;