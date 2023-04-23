const lines = [
  { x: [3, 8], y: [3, 8], z: [3, 10], cone: false, color: "green", name: 'E' },
  { x: [3, 4], y: [3, 4], z: [3, 8], cone: true, color: "blue", name: 'A' },
  { x: [3, 7], y: [3, 7], z: [3, 5], cone: true, color: "red", name: 'B' },
  { x: [4, 8], y: [4, 8], z: [8, 10], cone: false, color: "red", name: '' },
  { x: [7, 8], y: [7, 8], z: [5, 10], cone: false, color: "blue", name: '' },
];

const generateConeCoords = (lineCoords) => {
  const { x, y, z, cone, color } = lineCoords;
  if (cone) {
    return {
      'type': 'cone', 'showscale': false,
      'color': color,
      x: [x[1]],
      y: [y[1]],
      z: [z[1]],
      u: [0.1 * (x[1] - x[0])],
      v: [0.1 * (y[1] - y[0])],
      w: [0.1 * (z[1] - z[0])],
    }
  }
}

const generate_LineCoords = (lineCoords) => {
  const { x, y, z, color, name } = lineCoords;
  return {
    'type': 'scatter3d', 'mode': 'lines+text', 'name': name,
    'textposition': 'middle left',
    'text': name,
    'x': x, 'y': y, 'z': z,
    'line': {
      'width': 6,
      'color': color
    },
  }
}

const data = [
  {
    'type': 'scatter3d', 'mode': 'lines+text', 'text': 'O', 'textposition': 'middle left',
    'x': [0], 'y': [0], 'z': [0]
  },
  ...lines.map((lineCoords) => generateConeCoords(lineCoords)).filter(item => item !== undefined),
  ...lines.map((lineCoords) => generate_LineCoords(lineCoords)),
]

const layout = {
  'scene': {
    'camera': {
      'eye': { 'x': -0.76, 'y': 1.8, 'z': 0.92 }
    }
  },
}

const chartProps = { data, layout }
export default chartProps;
