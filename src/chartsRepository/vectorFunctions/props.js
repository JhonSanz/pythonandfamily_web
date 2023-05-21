const pointCount = 1000;
let i = 0;
let r = 0;

const x = [];
const y = [];
const z = [];
const c = [];

// we generate values for x,y but those are not continuous values
// and they will look too separated in the chart. If we divide them by a constant
// are going to be closer, simulating like to be continuous.

for (i = 1; i < pointCount; i++) {
  r = i;
  x.push(r * Math.cos(i / 30));
  y.push(r * Math.sin(i / 30));
  z.push(i);
  c.push(i)
}

const generateIntegralTerm = (a, b) => {
  return {
    'type': 'scatter3d', 'mode': 'markers', 'text': "",
    'textposition': 'middle left', 'showlegend': false,
    'marker': {
      'color': "red",
    },
    'x': [(b + (1 / 2 * b * b)) - (a + (1 / 2 * a * a))],
    'y': [0],
    'z': [(2 * b + (1 / 2 * b * b)) - (2 * a + (1 / 2 * a * a))],
  }
}

const generateIntegralVector = () => {
  const integrals = [];
  for (let i = -2; i < 2;) {
    integrals.push(generateIntegralTerm(0, i))
    i += 0.05;
  }
  return integrals
}

const chartProps = {
  data: [
    {
      'type': 'scatter3d', 'mode': 'lines+text',
      'textposition': 'middle left', 'showlegend': false,
      'text': ["", ""],
      x: [-1, 0, 10],
      y: [0, 0, 0],
      z: [0, 1, 11],
      'line': {
        'width': 6,
        'dash': 'solid',
      },
    },
    ...generateIntegralVector()
  ],
  layout: {}
}

export default chartProps;
