// src/utils/exportLayout.ts
export const exportLayout = async (components: Component[], settings: StyleSettings) => {
    const layout = {
      components,
      settings,
      metadata: {
        exportedAt: new Date().toISOString(),
        version: '1.0.0'
      }
    };
  
    // Generate HTML/CSS/JS
    const html = generateHTML(layout);
    const css = generateCSS(layout);
    const js = generateJS(layout);
  
    // Create downloadable files
    const files = new JSZip();
    files.file('index.html', html);
    files.file('styles.css', css);
    files.file('script.js', js);
    files.file('layout.json', JSON.stringify(layout, null, 2));
  
    const blob = await files.generateAsync({ type: 'blob' });
    saveAs(blob, 'portfolio-export.zip');
  };
  