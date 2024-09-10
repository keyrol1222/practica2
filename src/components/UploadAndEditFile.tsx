import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const UploadAndEditFile: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const linesArray = text.split('\n');
        setLines(linesArray);
      };
      reader.readAsText(file);
    }
  };

  const handleDeleteLine = (index: number) => {
    const newLines = [...lines];
    newLines.splice(index, 1);
    setLines(newLines);
  };

  const handleSaveFile = () => {
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, fileName || 'archivo-editado.txt');
  };

  return (
    <div>
      <h2>Subir archivo y editar líneas</h2>
      <input type="file" accept=".txt" onChange={handleFileUpload} />
      <table border={1}>
        <thead>
          <tr>
            <th>Índice</th>
            <th>Texto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{line}</td>
              <td>
                <button onClick={() => handleDeleteLine(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSaveFile}>Guardar archivo</button>
    </div>
  );
};

export default UploadAndEditFile;
