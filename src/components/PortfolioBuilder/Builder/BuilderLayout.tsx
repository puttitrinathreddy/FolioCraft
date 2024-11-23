import { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectSection';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface LayoutItem {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

const INITIAL_LAYOUTS = {
  lg: [
    { i: 'header', x: 0, y: 0, w: 12, h: 4 },
    { i: 'about', x: 0, y: 4, w: 6, h: 4 },
    { i: 'skills', x: 6, y: 4, w: 6, h: 4 },
    { i: 'projects', x: 0, y: 8, w: 12, h: 6 }
  ],
  md: [
    { i: 'header', x: 0, y: 0, w: 10, h: 4 },
    { i: 'about', x: 0, y: 4, w: 5, h: 4 },
    { i: 'skills', x: 5, y: 4, w: 5, h: 4 },
    { i: 'projects', x: 0, y: 8, w: 10, h: 6 }
  ],
  sm: [
    { i: 'header', x: 0, y: 0, w: 6, h: 4 },
    { i: 'about', x: 0, y: 4, w: 6, h: 4 },
    { i: 'skills', x: 0, y: 8, w: 6, h: 4 },
    { i: 'projects', x: 0, y: 12, w: 6, h: 6 }
  ]
};

const BuilderLayout = () => {
  const [layouts, setLayouts] = useState(INITIAL_LAYOUTS);

  const handleLayoutChange = (layout: LayoutItem[], layouts: any) => {
    setLayouts(layouts);
    // Optional: Save to localStorage
    localStorage.setItem('portfolio-layouts', JSON.stringify(layouts));
  };

  const renderSection = (id: string) => {
    switch (id) {
      case 'header':
        return <HeaderSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 12, md: 10, sm: 6 }}
        rowHeight={100}
        margin={[16, 16]}
        onLayoutChange={handleLayoutChange}
        draggableHandle=".drag-handle"
        resizeHandles={['se']}
      >
        {Object.keys(INITIAL_LAYOUTS.lg).map((key:any) => (
          <div 
            key={INITIAL_LAYOUTS.lg[key].i}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="drag-handle p-3 bg-gray-50 border-b border-gray-200 cursor-move">
              <h3 className="text-sm font-medium text-gray-700">
                {INITIAL_LAYOUTS.lg[key].i.charAt(0).toUpperCase() + 
                 INITIAL_LAYOUTS.lg[key].i.slice(1)}
              </h3>
            </div>
            <div className="p-4 overflow-auto">
              {renderSection(INITIAL_LAYOUTS.lg[key].i)}
            </div>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default BuilderLayout;