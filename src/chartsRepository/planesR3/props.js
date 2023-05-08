import { generateConeCoords, generate_LineCoords } from 'utils/generateVector';
import COLORS from 'utils/colors';
var Latex = require('react-latex');

function getrandom(num, mul) {
  var value = [];
  for (let i = 0; i <= num; i++) {
    var rand = Math.random() * mul;
    value.push(rand);
  }
  return value;
}

var trace1 = {
  opacity: 0.5,
  color: 'rgba(255,127,80,0.7)',
  type: 'mesh3d',
  x: [
    0,
    0,
    4,
    2,
  ],
  y: [
    0,
    2,
    2,
    -0.5
  ],
  z: [
    2,
    5,
    5,
    3
  ],
  scene: "scene1"
};

const data = [trace1]

const chartTile = "Planes in R³";

const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': 1, 'y': -2.5, 'z': 0.92 }
    }
  },
}
const chartProps = { data, layout, chartTile }
export default chartProps;
