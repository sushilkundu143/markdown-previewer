import { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    // Configure marked
    marked.setOptions({
      breaks: true,
      gfm: true,
      headerIds: true,
    });
  }, []);

  const html = marked.parse(text);

  return (
    <div className="h-screen grid grid-cols-2 gap-4">
      <div className="h-full p-4 bg-white">
        <h2 className='text-4xl my-2'>Editor</h2>
        <textarea
          id="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-full border border-gray-300 bg-gray-300 rounded-lg p-2 resize-none"
          placeholder="Enter Markdown text here..."
        />
      </div>
      <div className="h-full p-4 bg-white">
        <h2 className='text-4xl my-2'>Previewer</h2>
        <div
          id="preview"
          className="h-full border border-gray-400 p-4 bg-gray-300 shadow-md overflow-auto rounded-lg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export default App;
