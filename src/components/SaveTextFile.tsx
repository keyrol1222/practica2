import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const SaveTextFile: React.FC = () => {
  const [text, setText] = useState('');

  const handleSaveFile = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'archivo.txt');
  };

  return (
    <div>
      <h2>Guardar texto en archivo</h2>
      <textarea
        rows={10}
        cols={30}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleSaveFile}>Guardar en archivo</button>
    </div>
  );
};

export default SaveTextFile;
