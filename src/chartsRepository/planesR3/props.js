import {
  generateConeCoords,
  generate_LineCoords,
  generateMarker,
  generatePlane
} from 'utils/generateVector';
import COLORS from 'utils/colors';
var Latex = require('react-latex');

const nullVector = { x: 0, y: 0, z: 0 }
const P = { x: 1, y: 2, z: 2 }
const A = { x: 1, y: 0, z: 1 }
const B = { x: 1, y: 1, z: 0 }

const generateLine = (P, vec, t, props) => {
  const { cone, color, name, dotted } = props;
  return {
    x: [0, P.x + (t * vec.x)],
    y: [0, P.y + (t * vec.y)],
    z: [0, P.z + (t * vec.z)],
    cone, color, name, dotted
  }
}

const generatePoint = (P, A, t, props) => {
  const { color, name } = props;
  return {
    x: [P.x + (t * A.x)],
    y: [P.y + (t * A.y)],
    z: [P.z + (t * A.z)],
    color, name
  }
}

const fillPlaneCoords = (P, A, B, coord) => {
  var value = [];
  const planeValues = [[-2, -2], [1, -3], [2, 0], [-1, 2]]
  planeValues.forEach(item => {
    value.push(P[coord] + (item[0] * A[coord]) + (item[1] * B[coord]));
  })
  return value;
}

const generatePlaneData = (P, A, B, props) => {
  const { color, name } = props;
  return {
    x: fillPlaneCoords(P, A, B, "x"),
    y: fillPlaneCoords(P, A, B, "y"),
    z: fillPlaneCoords(P, A, B, "z"),
    color, name
  }
}

const generateData = (points, lines, planes) => {
  return [
    ...points.map((markerCoords) => generateMarker(markerCoords)),
    ...lines.map((lineCoords) => generateConeCoords(lineCoords)).filter(item => item !== undefined),
    ...lines.map((lineCoords) => generate_LineCoords(lineCoords)),
    ...planes.map((planesData) => generatePlane(planesData)),
  ]
}

const generateLinesSet = (P, A, B, nullVector) => {
  return [
    generateLine(nullVector, A, 1, { cone: false, color: COLORS.blue, name: 'A', dotted: false }),
    generateLine(nullVector, B, 1, { cone: false, color: COLORS.blue, name: 'B', dotted: false }),
    generateLine(P, P, 0, { cone: false, color: COLORS.blue, name: '', dotted: true }),
  ];
}

const generatePointsSet = (P, A) => {
  return [
    generatePoint(P, A, 0, { color: COLORS.red, name: 'P' }),
  ]
}

const generatePlaneSet = (P, A, B, nullVector) => {
  return [
    generatePlaneData(P, A, B, { color: COLORS.red, name: "" }),
    generatePlaneData({ x: 1, y: 1, z: 0 }, A, B, { color: COLORS.red, name: "" })
  ]
}

const lines = generateLinesSet(P, A, B, nullVector);
const points = generatePointsSet(P, A);
const planes = generatePlaneSet(P, A, B, nullVector);
const data = generateData(points, lines, planes);
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
