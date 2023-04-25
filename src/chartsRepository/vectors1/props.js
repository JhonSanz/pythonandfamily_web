import { generateConeCoords, generate_LineCoords } from 'utils/generateVector';

const lines = [
  { x: [3, 8], y: [3, 8], z: [3, 10], cone: false, color: "#388e3c", name: 'E', dotted: false },
  { x: [3, 4], y: [3, 4], z: [3, 8], cone: true, color: "#1976d3", name: 'A', dotted: false },
  { x: [3, 7], y: [3, 7], z: [3, 5], cone: true, color: "#e64a19", name: 'B', dotted: false },
  { x: [4, 8], y: [4, 8], z: [8, 10], cone: false, color: "#e64a19", name: '', dotted: true },
  { x: [7, 8], y: [7, 8], z: [5, 10], cone: false, color: "#1976d3", name: '', dotted: true },
];

const data = [
  {
    'type': 'scatter3d', 'mode': 'lines+text', 'text': 'O', 'textposition': 'middle left',
    'x': [0], 'y': [0], 'z': [0], 'showlegend': false,
  },
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

const chartTile = "Parallelogram law";

const chartProps = { data, layout, chartTile }
export default chartProps;
