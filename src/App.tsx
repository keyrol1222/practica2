import React from 'react';
import SaveTextFile from './components/SaveTextFile';
import UploadAndEditFile from './components/UploadAndEditFile';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Gestión de Archivos</h1>
      <SaveTextFile />
      <hr />
      <UploadAndEditFile />
    </div>
  );
};

export default App;