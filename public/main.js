console.log("Folonite Builder script loaded ✅");

(async () => {
  const { default: grapesjs } = await import(
    'https://unpkg.com/grapesjs@latest/dist/grapes.min.js'
  );

  const editor = grapesjs.init({
    container: '#editor',
    fromElement: true,
    height: '100%',
    storageManager: false
  });

  editor.setComponents('<h1>Welcome to Folonite Builder</h1>');
})();
