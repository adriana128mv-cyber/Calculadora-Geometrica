
import React, { useState, useMemo } from 'react';
import type { Shape, CalculationResult } from '../types';

interface ShapeCalculatorProps {
  shape: Shape;
  onBack: () => void;
}

const ShapeCalculator: React.FC<ShapeCalculatorProps> = ({ shape, onBack }) => {
  const initialInputs = shape.inputs.reduce((acc, input) => {
    acc[input.id] = '';
    return acc;
  }, {} as Record<string, string>);

  const [inputValues, setInputValues] = useState<Record<string, string>>(initialInputs);

  const handleInputChange = (id: string, value: string) => {
    setInputValues(prev => ({ ...prev, [id]: value }));
  };

  const numericInputs = useMemo(() => {
    return Object.entries(inputValues).reduce((acc, [key, value]) => {
      acc[key] = parseFloat(value) || 0;
      return acc;
    }, {} as Record<string, number>);
  }, [inputValues]);

  const results: CalculationResult[] = useMemo(() => {
    return shape.calculate(numericInputs);
  }, [shape, numericInputs]);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto animate-fade-in">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Volver a la selección
      </button>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center space-x-4">
            <shape.icon className="h-12 w-12 text-indigo-500" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{shape.name}</h2>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">Fórmulas</h3>
              <div className="space-y-2">
                {shape.formulas.map(formula => (
                  <p key={formula.label} className="text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 p-3 rounded-md">
                    <span className="font-semibold">{formula.label}:</span>
                    <code className="ml-2 font-mono text-indigo-600 dark:text-indigo-400">{formula.value}</code>
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">Entradas</h3>
              <div className="space-y-4">
                {shape.inputs.map(input => (
                  <div key={input.id}>
                    <label htmlFor={input.id} className="block text-sm font-medium text-slate-600 dark:text-slate-300">
                      {input.label}
                    </label>
                    <input
                      type="number"
                      name={input.id}
                      id={input.id}
                      value={inputValues[input.id]}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-slate-900 dark:text-slate-200"
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">Resultados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map(result => (
                <div key={result.label} className="bg-indigo-50 dark:bg-indigo-900/50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">{result.label}</p>
                  <p className="mt-1 text-2xl font-bold text-indigo-800 dark:text-indigo-100">
                    {result.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
                    <span className="text-lg ml-1 text-indigo-500 dark:text-indigo-400">{result.unit}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeCalculator;
