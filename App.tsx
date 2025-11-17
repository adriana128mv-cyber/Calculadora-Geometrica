
import React, { useState } from 'react';
import { SHAPES, SHAPE_IDs_2D, SHAPE_IDs_3D } from './constants';
import type { ShapeID } from './types';
import ShapeCalculator from './components/ShapeCalculator';

const ShapeCard: React.FC<{ shapeId: ShapeID; onSelect: (id: ShapeID) => void; }> = ({ shapeId, onSelect }) => {
  const shape = SHAPES[shapeId];
  const Icon = shape.icon;
  return (
    <button
      onClick={() => onSelect(shapeId)}
      className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 ease-in-out w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus:ring-offset-slate-900"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{shape.name}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{shape.type === '2D' ? 'Plana' : 'Sólido'}</p>
        </div>
      </div>
    </button>
  );
};

const ShapeSelector: React.FC<{ onSelectShape: (id: ShapeID) => void; }> = ({ onSelectShape }) => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-indigo-500 pb-2 mb-6">
          Figuras Planas (2D)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SHAPE_IDs_2D.map(id => <ShapeCard key={id} shapeId={id} onSelect={onSelectShape} />)}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-indigo-500 pb-2 mb-6">
          Sólidos (3D)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SHAPE_IDs_3D.map(id => <ShapeCard key={id} shapeId={id} onSelect={onSelectShape} />)}
        </div>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [selectedShapeId, setSelectedShapeId] = useState<ShapeID | null>(null);

  const handleSelectShape = (id: ShapeID) => {
    setSelectedShapeId(id);
  };

  const handleBack = () => {
    setSelectedShapeId(null);
  };

  const selectedShape = selectedShapeId ? SHAPES[selectedShapeId] : null;

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-200">
      <header className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Calculadora Geométrica
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedShape ? (
          <ShapeCalculator shape={selectedShape} onBack={handleBack} />
        ) : (
          <ShapeSelector onSelectShape={handleSelectShape} />
        )}
      </main>
      
      <footer className="text-center py-6 text-sm text-slate-500 dark:text-slate-400">
          <p>Creado con React, TypeScript, y Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
