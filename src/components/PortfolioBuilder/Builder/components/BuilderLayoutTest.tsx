import { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { motion } from 'framer-motion';
import HeaderSection from './HeaderSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import { CustomizationPanel } from '../CustomizationPanel';

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
        {Object.keys(INITIAL_LAYOUTS.lg).map((key: any) => (
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




// import { useState, useEffect } from 'react';
// import { Responsive, WidthProvider } from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
// import { motion } from 'framer-motion';
// import HeaderSection from './components/HeaderSection';
// import AboutSection from './components/AboutSection';
// import SkillsSection from './components/SkillsSection';
// import ProjectsSection from './components/ProjectsSection';
// import { CustomizationPanel } from './CustomizationPanel';
// import { AVAILABLE_COMPONENTS } from './constants';

// const ResponsiveGridLayout = WidthProvider(Responsive);

// const BuilderLayout = () => {
//   const [layouts, setLayouts] = useState(() => {
//     const saved = localStorage.getItem('portfolio-layouts');
//     return saved ? JSON.parse(saved) : { lg: [], md: [], sm: [] };
//   });

//   const [activeComponents, setActiveComponents] = useState<string[]>(() => {
//     const saved = localStorage.getItem('portfolio-active-components');
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const generateLayout = (componentId: string) => ({
//     lg: [...(layouts.lg || []), { i: componentId, x: 0, y: Infinity, w: 6, h: 4 }],
//     md: [...(layouts.md || []), { i: componentId, x: 0, y: Infinity, w: 5, h: 4 }],
//     sm: [...(layouts.sm || []), { i: componentId, x: 0, y: Infinity, w: 6, h: 4 }],
//   });

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     const componentId = e.dataTransfer.getData('componentId');
//     if (!componentId) return; // Prevent crashing on invalid drag-and-drop
//     if (!activeComponents.includes(componentId)) {
//       const newLayout = generateLayout(componentId);
//       setActiveComponents([...activeComponents, componentId]);
//       setLayouts((prevLayouts) => ({
//         lg: [...(prevLayouts.lg || []), ...newLayout.lg],
//         md: [...(prevLayouts.md || []), ...newLayout.md],
//         sm: [...(prevLayouts.sm || []), ...newLayout.sm],
//       }));
//       localStorage.setItem(
//         'portfolio-active-components',
//         JSON.stringify([...activeComponents, componentId])
//       );
//     }
//   };

//   const handleLayoutChange = (currentLayout: any, allLayouts: any) => {
//     if (!allLayouts || typeof allLayouts !== 'object') return; // Prevent undefined issues
//     setLayouts(allLayouts);
//     localStorage.setItem('portfolio-layouts', JSON.stringify(allLayouts));
//   };

//   const handleRemoveComponent = (componentId: string) => {
//     setActiveComponents(activeComponents.filter((id) => id !== componentId));
//     setLayouts({
//       lg: layouts.lg.filter((item: { i: string }) => item.i !== componentId),
//       md: layouts.md.filter((item: { i: string }) => item.i !== componentId),
//       sm: layouts.sm.filter((item: { i: string }) => item.i !== componentId),
//     });
//   };

//   if (!mounted) return null;

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar with available components */}
//       <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
//         <h2 className="text-lg font-semibold mb-4">Components</h2>
//         <div className="space-y-2">
//           {AVAILABLE_COMPONENTS.map((component) => (
//             <motion.div
//               key={component.id}
//               className="p-3 bg-gray-50 rounded-lg cursor-move hover:bg-gray-100 transition-colors"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               draggable
//               onDragStart={(e: any) => e.dataTransfer.setData('componentId', component.id)}
//             >
//               {component.title}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Main content with drag-and-drop grid */}
//       <div
//         className="flex-1 bg-gray-100 overflow-y-auto"
//         onDrop={handleDrop}
//         onDragOver={(e) => e.preventDefault()}
//       >
//         <ResponsiveGridLayout
//           className="layout p-4"
//           layouts={layouts}
//           breakpoints={{ lg: 1200, md: 996, sm: 768 }}
//           cols={{ lg: 12, md: 10, sm: 6 }}
//           rowHeight={100}
//           margin={[16, 16]}
//           onLayoutChange={handleLayoutChange}
//           draggableHandle=".drag-handle"
//           resizeHandles={['se']}
//           isBounded={false}
//           isDroppable={true}
//           useCSSTransforms={true}
//           preventCollision={false}
//           compactType={null}
//         >
//           {activeComponents.map((componentId) => {
//             const component = AVAILABLE_COMPONENTS.find((c) => c.id === componentId);
//             if (!component) return null; // Prevent rendering errors
//             const Component = component.component;

//             return (
//               <div
//                 key={componentId}
//                 className="bg-white rounded-lg shadow-sm overflow-hidden"
//                 onClick={() => setSelectedComponent(componentId)}
//               >
//                 <div className="drag-handle p-3 bg-gray-50 border-b border-gray-200 cursor-move flex justify-between items-center">
//                   <h3 className="text-sm font-medium text-gray-700">{component.title}</h3>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleRemoveComponent(componentId);
//                     }}
//                     className="text-gray-400 hover:text-red-500"
//                   >
//                     <TrashIcon />
//                   </button>
//                 </div>
//                 <div className="p-4 overflow-auto">
//                   <Component images={[]} />
//                 </div>
//               </div>
//             );
//           })}
//         </ResponsiveGridLayout>
//       </div>

//       {/* Customization Panel */}
//       <CustomizationPanel
//         selectedComponent={selectedComponent}
//         onClose={() => setSelectedComponent(null)}
//       />
//     </div>
//   );
// };

// const TrashIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//   </svg>
// );

// export default BuilderLayout;