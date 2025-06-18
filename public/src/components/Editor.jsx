import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import pluginWebpage from 'grapesjs-preset-webpage';

export default function Editor({ onSave }) {
  const editorRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    editorRef.current = grapesjs.init({
      container: containerRef.current,
      height: '100vh',
      fromElement: false,
      plugins: [pluginWebpage],
      storageManager: false,
      styleManager: { clearProperties: 1 }
    });

    return () => editorRef.current.destroy();
  }, []);

  useEffect(() => {
    if (!editorRef.current) return;
    editorRef.current.on('storage:storeready', () => console.log('Storage ready'));
  }, []);

  const saveHtml = () => {
    const html = editorRef.current.getHtml();
    const css = editorRef.current.getCss();
    onSave({ html, css });
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div ref={containerRef} style={{ height: '100%' }} />
      <button
        onClick={saveHtml}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          zIndex: 1000,
          padding: '0.5rem 1rem',
          background: 'var(--accent-color)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius)',
          cursor: 'pointer'
        }}
      >
        Save
      </button>
    </div>
  );
}
