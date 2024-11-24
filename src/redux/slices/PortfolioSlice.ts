import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define interfaces for our state
interface HeaderInfo {
  title: string;
  subtitle: string;
  description: string;
}
interface ContactInfo {
  email: string;
  phone: string;
  message: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
}

interface Skill {
  id: string;
  name: string;
  level: number; // 1-5 or 0-100
  category?: string;
}

interface PortfolioState {
  headerInfo: HeaderInfo;
  personalInfo: {
    name: string;
    bio: string;
    location: string;
    socialLinks?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      portfolio?: string;
    };
  };
  contactInfo: ContactInfo;
  skills: Skill[];
  projects: Project[];
}

const initialState: PortfolioState = {
  headerInfo: {
    title: '',
    subtitle: '',
    description: '',
  },
  personalInfo: {
    name: '',
    bio: '',
    location: '',
    socialLinks: {
      github: '',
      linkedin: '',
      twitter: '',
      portfolio: '',
    },
  },
  contactInfo: {
    email: '',
    phone: '',
    message: '',
  },
  skills: [],
  projects: [],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setHeaderInfo: (state, action: PayloadAction<Partial<HeaderInfo>>) => {
      state.headerInfo = {
        ...state.headerInfo,
        ...action.payload,
      };
    },
    setContactInfo: (state, action: PayloadAction<Partial<ContactInfo>>) => {
      state.contactInfo = {
        ...state.contactInfo,
        ...action.payload,
      };
    },
    setPersonalInfo: (state, action: PayloadAction<Partial<typeof state.personalInfo>>) => {
      state.personalInfo = {
        ...state.personalInfo,
        ...action.payload,
      };
    },
    // Skills management
    addSkill: (state, action: PayloadAction<Skill>) => {
      state.skills.push(action.payload);
    },
    updateSkill: (state, action: PayloadAction<{ id: string; updates: Partial<Skill> }>) => {
      const index = state.skills.findIndex(skill => skill.id === action.payload.id);
      if (index !== -1) {
        state.skills[index] = { ...state.skills[index], ...action.payload.updates };
      }
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter(skill => skill.id !== action.payload);
    },
    reorderSkills: (state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) => {
      const { oldIndex, newIndex } = action.payload;
      const skill = state.skills.splice(oldIndex, 1)[0];
      state.skills.splice(newIndex, 0, skill);
    },

    // Projects management
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action: PayloadAction<{ id: string; updates: Partial<Project> }>) => {
      const index = state.projects.findIndex(project => project.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...action.payload.updates };
      }
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    },
    reorderProjects: (state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) => {
      const { oldIndex, newIndex } = action.payload;
      const project = state.projects.splice(oldIndex, 1)[0];
      state.projects.splice(newIndex, 0, project);
    },

    // Bulk updates
    setPortfolioData: (state, action: PayloadAction<Partial<PortfolioState>>) => {
      return { ...state, ...action.payload };
    },
    resetPortfolio: (state) => {
      return initialState;
    },
  },
});

export const {
  setHeaderInfo,
  setPersonalInfo,
  setContactInfo,
  addSkill,
  updateSkill,
  removeSkill,
  reorderSkills,
  addProject,
  updateProject,
  removeProject,
  reorderProjects,
  setPortfolioData,
  resetPortfolio,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;

// Selectors
export const selectHeaderInfo = (state: { portfolio: PortfolioState }) => state.portfolio.headerInfo;
export const selectPersonalInfo = (state: { portfolio: PortfolioState }) => state.portfolio.personalInfo;
export const selectSkills = (state: { portfolio: PortfolioState }) => state.portfolio.skills;
export const selectProjects = (state: { portfolio: PortfolioState }) => state.portfolio.projects;