
import type { Shape, ShapeID } from './types';
import {
  SquareIcon, RectangleIcon, TriangleIcon, CircleIcon, TrapezoidIcon,
  CubeIcon, RectangularPrismIcon, CylinderIcon, SphereIcon, ConeIcon
} from './components/icons';

export const SHAPES: Record<ShapeID, Shape> = {
  square: {
    id: 'square',
    name: 'Cuadrado',
    type: '2D',
    icon: SquareIcon,
    inputs: [{ id: 'a', label: 'Lado (a)' }],
    formulas: [
      { label: 'Área', value: 'A = a²' },
      { label: 'Perímetro', value: 'P = 4a' },
    ],
    calculate: (inputs) => {
      const a = inputs.a || 0;
      return [
        { label: 'Área', value: a * a, unit: 'u²' },
        { label: 'Perímetro', value: 4 * a, unit: 'u' },
      ];
    },
  },
  rectangle: {
    id: 'rectangle',
    name: 'Rectángulo',
    type: '2D',
    icon: RectangleIcon,
    inputs: [
      { id: 'l', label: 'Largo (l)' },
      { id: 'w', label: 'Ancho (w)' },
    ],
    formulas: [
      { label: 'Área', value: 'A = l × w' },
      { label: 'Perímetro', value: 'P = 2l + 2w' },
    ],
    calculate: (inputs) => {
      const l = inputs.l || 0;
      const w = inputs.w || 0;
      return [
        { label: 'Área', value: l * w, unit: 'u²' },
        { label: 'Perímetro', value: 2 * l + 2 * w, unit: 'u' },
      ];
    },
  },
  triangle: {
    id: 'triangle',
    name: 'Triángulo',
    type: '2D',
    icon: TriangleIcon,
    inputs: [
      { id: 'b', label: 'Base (b)' },
      { id: 'h', label: 'Altura (h)' },
      { id: 's1', label: 'Lado 1 (s1)' },
      { id: 's2', label: 'Lado 2 (s2)' },
      { id: 's3', label: 'Lado 3 (s3)' },
    ],
    formulas: [
      { label: 'Área', value: 'A = (b × h) / 2' },
      { label: 'Perímetro', value: 'P = s1 + s2 + s3' },
    ],
    calculate: (inputs) => {
      const b = inputs.b || 0;
      const h = inputs.h || 0;
      const s1 = inputs.s1 || 0;
      const s2 = inputs.s2 || 0;
      const s3 = inputs.s3 || 0;
      return [
        { label: 'Área', value: (b * h) / 2, unit: 'u²' },
        { label: 'Perímetro', value: s1 + s2 + s3, unit: 'u' },
      ];
    },
  },
  circle: {
    id: 'circle',
    name: 'Círculo',
    type: '2D',
    icon: CircleIcon,
    inputs: [{ id: 'r', label: 'Radio (r)' }],
    formulas: [
      { label: 'Área', value: 'A = πr²' },
      { label: 'Perímetro', value: 'P = 2πr' },
    ],
    calculate: (inputs) => {
      const r = inputs.r || 0;
      return [
        { label: 'Área', value: Math.PI * r * r, unit: 'u²' },
        { label: 'Perímetro', value: 2 * Math.PI * r, unit: 'u' },
      ];
    },
  },
  trapezoid: {
    id: 'trapezoid',
    name: 'Trapecio',
    type: '2D',
    icon: TrapezoidIcon,
    inputs: [
        { id: 'B', label: 'Base mayor (B)' },
        { id: 'b', label: 'Base menor (b)' },
        { id: 'h', label: 'Altura (h)' },
        { id: 's1', label: 'Lado 1 (s1)' },
        { id: 's2', label: 'Lado 2 (s2)' },
    ],
    formulas: [
        { label: 'Área', value: 'A = ((B + b) / 2) × h' },
        { label: 'Perímetro', value: 'P = B + b + s1 + s2' },
    ],
    calculate: (inputs) => {
        const B = inputs.B || 0;
        const b = inputs.b || 0;
        const h = inputs.h || 0;
        const s1 = inputs.s1 || 0;
        const s2 = inputs.s2 || 0;
        return [
            { label: 'Área', value: ((B + b) / 2) * h, unit: 'u²' },
            { label: 'Perímetro', value: B + b + s1 + s2, unit: 'u' },
        ];
    },
  },
  cube: {
    id: 'cube',
    name: 'Cubo',
    type: '3D',
    icon: CubeIcon,
    inputs: [{ id: 'a', label: 'Arista (a)' }],
    formulas: [
      { label: 'Volumen', value: 'V = a³' },
      { label: 'Área de Superficie', value: 'A = 6a²' },
    ],
    calculate: (inputs) => {
      const a = inputs.a || 0;
      return [
        { label: 'Volumen', value: a * a * a, unit: 'u³' },
        { label: 'Área de Superficie', value: 6 * a * a, unit: 'u²' },
      ];
    },
  },
  rectangular_prism: {
    id: 'rectangular_prism',
    name: 'Prisma Rectangular',
    type: '3D',
    icon: RectangularPrismIcon,
    inputs: [
      { id: 'l', label: 'Largo (l)' },
      { id: 'w', label: 'Ancho (w)' },
      { id: 'h', label: 'Altura (h)' },
    ],
    formulas: [
      { label: 'Volumen', value: 'V = l × w × h' },
      { label: 'Área de Superficie', value: 'A = 2(lw + lh + wh)' },
    ],
    calculate: (inputs) => {
      const l = inputs.l || 0;
      const w = inputs.w || 0;
      const h = inputs.h || 0;
      return [
        { label: 'Volumen', value: l * w * h, unit: 'u³' },
        { label: 'Área de Superficie', value: 2 * (l * w + l * h + w * h), unit: 'u²' },
      ];
    },
  },
  cylinder: {
    id: 'cylinder',
    name: 'Cilindro',
    type: '3D',
    icon: CylinderIcon,
    inputs: [
      { id: 'r', label: 'Radio (r)' },
      { id: 'h', label: 'Altura (h)' },
    ],
    formulas: [
      { label: 'Volumen', value: 'V = πr²h' },
      { label: 'Área de Superficie', value: 'A = 2πrh + 2πr²' },
    ],
    calculate: (inputs) => {
      const r = inputs.r || 0;
      const h = inputs.h || 0;
      return [
        { label: 'Volumen', value: Math.PI * r * r * h, unit: 'u³' },
        { label: 'Área de Superficie', value: 2 * Math.PI * r * h + 2 * Math.PI * r * r, unit: 'u²' },
      ];
    },
  },
  sphere: {
    id: 'sphere',
    name: 'Esfera',
    type: '3D',
    icon: SphereIcon,
    inputs: [{ id: 'r', label: 'Radio (r)' }],
    formulas: [
      { label: 'Volumen', value: 'V = (4/3)πr³' },
      { label: 'Área de Superficie', value: 'A = 4πr²' },
    ],
    calculate: (inputs) => {
      const r = inputs.r || 0;
      return [
        { label: 'Volumen', value: (4 / 3) * Math.PI * r * r * r, unit: 'u³' },
        { label: 'Área de Superficie', value: 4 * Math.PI * r * r, unit: 'u²' },
      ];
    },
  },
  cone: {
    id: 'cone',
    name: 'Cono',
    type: '3D',
    icon: ConeIcon,
    inputs: [
      { id: 'r', label: 'Radio (r)' },
      { id: 'h', label: 'Altura (h)' },
    ],
    formulas: [
      { label: 'Volumen', value: 'V = (1/3)πr²h' },
      { label: 'Área de Superficie', value: 'A = πr(r + √(h² + r²))' },
    ],
    calculate: (inputs) => {
      const r = inputs.r || 0;
      const h = inputs.h || 0;
      const slantHeight = Math.sqrt(h * h + r * r);
      return [
        { label: 'Volumen', value: (1 / 3) * Math.PI * r * r * h, unit: 'u³' },
        { label: 'Área de Superficie', value: Math.PI * r * (r + slantHeight), unit: 'u²' },
      ];
    },
  },
};

export const SHAPE_IDs_2D = (Object.keys(SHAPES) as ShapeID[]).filter(id => SHAPES[id].type === '2D');
export const SHAPE_IDs_3D = (Object.keys(SHAPES) as ShapeID[]).filter(id => SHAPES[id].type === '3D');
