import { generateConeCoords, generate_LineCoords, generateMarker } from 'utils/generateVector';
import COLORS from 'utils/colors';

const lines = [
  { x: [0, 1], y: [0, 1], z: [0, 0.5], cone: true, color: COLORS.orange, name: 'A', dotted: false }, // A
  { x: [0, 0.2], y: [0, 1], z: [0, 1], cone: false, color: COLORS.blue, name: '', dotted: true },
  { x: [0, 0.7], y: [0, 1.5], z: [0, 1.25], cone: false, color: COLORS.blue, name: '', dotted: true },
  { x: [0, 1.2], y: [0, 2], z: [0, 1.5], cone: false, color: COLORS.blue, name: '', dotted: true },
  { x: [0, -0.3], y: [0, 0.5], z: [0, 0.75], cone: false, color: COLORS.blue, name: '', dotted: true },
  { x: [-0.3, 1.2], y: [0.5, 2], z: [0.75, 1.5], cone: false, color: COLORS.green, name: '', dotted: false },
];

const points = [
  { x: [0.2], y: [1], z: [1], color: COLORS.red, name: 'P' },
  { x: [0.7], y: [1.5], z: [1.25], color: COLORS.blue, name: 'P + 0.5A' },
  { x: [1.2], y: [2], z: [1.5], color: COLORS.blue, name: 'P + A' },
  { x: [-0.3], y: [0.5], z: [0.75], color: COLORS.blue, name: 'P - 0.5A' },
]

const data = [
  ...points.map((markerCoords) => generateMarker(markerCoords)),
  ...lines.map((lineCoords) => generateConeCoords(lineCoords)).filter(item => item !== undefined),
  ...lines.map((lineCoords) => generate_LineCoords(lineCoords)),
]

const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': 1, 'y': -1.8, 'z': 0.92 }
    }
  },
}

const chartTile = "Lines R³";

const chartProps = { data, layout, chartTile }
export default chartProps;
