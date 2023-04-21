import Plotly from 'plotly.js-gl3d-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);
var Latex = require('react-latex');

function App() {
  var pointCount = 1000;
  var i, r;

  var x = [];
  var y = [];
  var z = [];
  var c = [];

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

  const generalForm = "$x^2 + y^2 - z^2 = 0$"

  return (
    <div className="App">
      <Latex>{generalForm}</Latex>
      <Plot
        data={[{
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
        }]}
        layout={{ width: 1000, height: 900, title: 'Cono circular' }}
      />
    </div>
  );
}

export default App;
