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

const chartProps = {
  data: [{
    type: 'scatter3d',
    mode: 'lines',
    x: x,
    y: y,
    z: z,
    opacity: 0.7,
    line: {
      width: 10,
      color: c,
      colorscale: 'Viridis'
    }
  }],
  layout: {}
}

export default chartProps;
