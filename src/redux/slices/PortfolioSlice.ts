// src/redux/slices/portfolioSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
}

interface PortfolioState {
  personalInfo: {
    name: string;
    bio: string;
    location: string;
  };
  skills: string[];
  projects: Project[];
}

const initialState: PortfolioState = {
  personalInfo: {
    name: '',
    bio: '',
    location: '',
  },
  skills: [],
  projects: [],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPersonalInfo: (
      state,
      action: PayloadAction<{ name: string; bio: string; location: string }>
    ) => {
      state.personalInfo = action.payload;
    },
    addSkill: (state, action: PayloadAction<string>) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter((project) => project.id !== action.payload);
    },
  },
});

export const { setPersonalInfo, addSkill, removeSkill, addProject, removeProject } = portfolioSlice.actions;
export default portfolioSlice.reducer;
