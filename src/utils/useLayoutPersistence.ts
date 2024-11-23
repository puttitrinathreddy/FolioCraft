import { useState, useEffect } from 'react';

export const useLayoutPersistence = (initialLayouts: any) => {
  const [layouts, setLayouts] = useState(() => {
    if (typeof window === 'undefined') return initialLayouts;
    const savedLayouts = localStorage.getItem('portfolio-layouts');
    return savedLayouts ? JSON.parse(savedLayouts) : initialLayouts;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-layouts', JSON.stringify(layouts));
  }, [layouts]);

  return [layouts, setLayouts] as const;
};