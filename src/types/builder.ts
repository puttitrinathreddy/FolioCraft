export interface MosaicLayout {
    direction: 'row' | 'column';
    first: string | MosaicLayout;
    second: string | MosaicLayout;
    splitPercentage?: number;
  }
  
  export interface ComponentSettings {
    position?: {
      x: number;
      y: number;
    };
    size?: {
      width: number;
      height: number;
    };
    style?: {
      backgroundColor?: string;
      padding?: string;
      margin?: string;
      // Add more style properties as needed
    };
    content?: Record<string, any>;
  }
  
  export interface Component {
    id: string;
    type: string;
    settings: ComponentSettings;
    data?: Record<string, any>;
  }
  
  export interface BuilderState {
    layout: MosaicLayout;
    components: Component[];
    activeDragId: string | null;
    selectedComponentId: string | null;
    history: {
      past: Component[][];
      present: Component[];
      future: Component[][];
    };
    settings: {
      gridSize: number;
      snapToGrid: boolean;
      showGuides: boolean;
    };
  }

