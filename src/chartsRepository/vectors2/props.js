import { generateConeCoords, generate_LineCoords } from 'utils/generateVector';

const lines = [
  { x: [0, 8], y: [0, 8], z: [0, 10], cone: true, color: "green", name: 'A' },
  { x: [0, 8], y: [0, 8], z: [0, 0], cone: false, color: "black", name: '' },
  { x: [8, 8], y: [8, 8], z: [0, 10], cone: false, color: "black", name: '' },
  { x: [8, 8], y: [0, 8], z: [0, 0], cone: false, color: "black", name: '' },
  { x: [0, 8], y: [8, 8], z: [0, 0], cone: false, color: "black", name: '' },
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
