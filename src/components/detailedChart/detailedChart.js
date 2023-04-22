import Grid from '@mui/material/Grid';
import Plotly from 'plotly.js-gl3d-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

export default function DetailedChart({
  description,
  chartProps
}) {
  const { data, layout } = chartProps;

  return (
    <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Grid item xs={4} sx={{ paddingLeft: "50px !important" }}>
        {description}
      </Grid>
      <Grid item xs={8} textAlign={"center"} height={"100%"} width={"100%"} alignItems={"center"} display={"flex"}>
        <Plot
          data={data}
          layout={{
            margin: {
              l: 0,
              r: 0,
              b: 0,
              t: 0,
              pad: 0
            },
            title: 'Cono circular',
            autosize: true
          }}
          config={{ autosizable: true, responsive: true }}
          style={{ width: '100%', height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}