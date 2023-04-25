import { generateConeCoords, generate_LineCoords } from 'utils/generateVector';

const lines = [
  { x: [0, 8], y: [0, 8], z: [0, 10], cone: true, color: "#e64a19", name: 'A', dotted: false },
  { x: [0, 12], y: [0, 12], z: [0, 15], cone: true, color: "#388e3c", name: 'Q', dotted: true },
  { x: [0, 8], y: [0, 8], z: [0, 0], cone: false, color: "#1976d3", name: '', dotted: true },
  { x: [8, 8], y: [8, 8], z: [0, 10], cone: false, color: "#1976d3", name: '', dotted: true },
  { x: [8, 8], y: [0, 8], z: [0, 0], cone: false, color: "#1976d3", name: '', dotted: true },
  { x: [0, 8], y: [8, 8], z: [0, 0], cone: false, color: "#1976d3", name: '', dotted: true },
];

const data = [
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

const chartTile = "Vector norm";

const chartProps = { data, layout, chartTile }
export default chartProps;
