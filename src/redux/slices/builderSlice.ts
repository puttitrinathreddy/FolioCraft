import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BuilderState, Component, MosaicLayout, ComponentSettings } from '@/types/builder';

const initialLayout: MosaicLayout = {
  direction: 'row',
  first: 'componentLibrary',
  second: {
    direction: 'row',
    first: 'builder',
    second: 'customization',
    splitPercentage: 75,
  },
  splitPercentage: 20,
};

const initialState: BuilderState = {
  // Mosaic layout configuration
  layout: initialLayout,
  
  // Components in the builder area
  components: [],
  
  // Component being dragged
  activeDragId: null,
  
  // Selected component for editing
  selectedComponentId: null,
  
  // Undo/Redo history
  history: {
    past: [],
    present: [],
    future: [],
  },
  
  // Builder settings
  settings: {
    gridSize: 8,
    snapToGrid: true,
    showGuides: true,
  },
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    // Layout Management
    updateLayout: (state, action: PayloadAction<MosaicLayout>) => {
      state.layout = action.payload;
    },

    // Component Management
    addComponent: (state, action: PayloadAction<{ id: string; type: string }>) => {
        state.components.push({
          id: action.payload.id,
          type: action.payload.type,
          settings: {},
        });
      },

    removeComponent: (state, action: PayloadAction<string>) => {
      state.components = state.components.filter(
        component => component.id !== action.payload
      );
    },

    updateComponent: (state, action: PayloadAction<{
      id: string;
      updates: Partial<Component>;
    }>) => {
      const index = state.components.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.components[index] = {
          ...state.components[index],
          ...action.payload.updates,
        };
      }
    },

    reorderComponents: (state, action: PayloadAction<{
      oldIndex: number;
      newIndex: number;
    }>) => {
      const { oldIndex, newIndex } = action.payload;
      const [movedComponent] = state.components.splice(oldIndex, 1);
      state.components.splice(newIndex, 0, movedComponent);
    },

    // Component Selection
    setSelectedComponent: (state, action: PayloadAction<string | null>) => {
      state.selectedComponentId = action.payload;
    },

    // Drag and Drop
    setActiveDragId: (state, action: PayloadAction<string | null>) => {
      state.activeDragId = action.payload;
    },

    // Component Settings
    updateComponentSettings: (state, action: PayloadAction<{
      componentId: string;
      settings: Partial<ComponentSettings>;
    }>) => {
      const component = state.components.find(c => c.id === action.payload.componentId);
      if (component) {
        component.settings = {
          ...component.settings,
          ...action.payload.settings,
        };
      }
    },

    // Builder Settings
    updateBuilderSettings: (state, action: PayloadAction<Partial<BuilderState['settings']>>) => {
      state.settings = {
        ...state.settings,
        ...action.payload,
      };
    },

    // History Management
    saveToHistory: (state) => {
      state.history.past.push(state.components);
      state.history.future = [];
    },

    undo: (state) => {
      if (state.history.past.length > 0) {
        const previous = state.history.past[state.history.past.length - 1];
        state.history.past = state.history.past.slice(0, -1);
        state.history.future.unshift(state.components);
        state.components = previous;
      }
    },

    redo: (state) => {
      if (state.history.future.length > 0) {
        const next = state.history.future[0];
        state.history.future = state.history.future.slice(1);
        state.history.past.push(state.components);
        state.components = next;
      }
    },
  },
});

// Export actions
export const {
  updateLayout,
  addComponent,
  removeComponent,
  updateComponent,
  reorderComponents,
  setSelectedComponent,
  setActiveDragId,
  updateComponentSettings,
  updateBuilderSettings,
  saveToHistory,
  undo,
  redo,
} = builderSlice.actions;

// Export reducer
export default builderSlice.reducer;