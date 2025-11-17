
import type React from 'react';

export type ShapeID =
  | 'square' | 'rectangle' | 'triangle' | 'circle' | 'trapezoid'
  | 'cube' | 'rectangular_prism' | 'cylinder' | 'sphere' | 'cone';

export interface ShapeInput {
  id: string;
  label: string;
}

export interface ShapeFormula {
  label: string;
  value: string;
}

export interface CalculationResult {
  label: string;
  value: number;
  unit: string;
}

export interface Shape {
  id: ShapeID;
  name: string;
  type: '2D' | '3D';
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  inputs: ShapeInput[];
  formulas: ShapeFormula[];
  calculate: (inputs: Record<string, number>) => CalculationResult[];
}
