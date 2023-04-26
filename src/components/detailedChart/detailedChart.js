import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Plotly from 'plotly.js-gl3d-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  maxHeight: "70%",
  overflowY: "scroll",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DetailedChart({
  miniDescription,
  description,
  chartProps
}) {
  const { data, layout, chartTile, DataManager } = chartProps;
  const [open, setOpen] = useState(false);
  const [initialData, setIinitialData] = useState([]);
  const [managedData, setmanagedData] = useState(undefined);
  const [count, setCount] = useState(data.length);

  useEffect(() => {
    setIinitialData(data);
    setmanagedData(DataManager !== undefined ? data : undefined);
  }, [data])

  useEffect(() => {
    Plotly.react(
      'plot_div',
      managedData || initialData,
      {
        ...layout,
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
          pad: 0
        },
        title: {
          text: chartTile,
          pad: { t: 10, l: 10 },
          x: 0, y: 1
        },
        autosize: true,
        // paper_bgcolor: '#fdfdfd'
      },
      {
        autosizable: true, responsive: true,
        displaylogo: false,
        modeBarButtonsToRemove: [
          // "zoom2d", "pan2d",
          "select2d", "lasso2d", "zoomIn2d",
          "zoomOut2d", "autoScale2d", "resetScale2d",
          "hoverClosestGl2d", "hoverClosestPie", "toggleHover", "resetViews",
          "toImage", "sendDataToCloud", "toggleSpikelines", "resetViewMapbox",
          "zoom3d", "pan3d", "orbitRotation", "tableRotation", "handleDrag3d",
          "resetCameraDefault3d", "resetCameraLastSave3d", "hoverClosest3d"
        ]
      }
    );
  }, [initialData, managedData])

  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={5}
      >
        <Card
          sx={{ margin: 2 }}
          elevation={3}
        >
          <CardContent>
            {miniDescription}
            {DataManager !== undefined && DataManager(setmanagedData, count, setCount)}
            <br />
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="outlined"
                size='small'
                onClick={() => setOpen(true)}
              >
                Continue reading
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12} sm={12} md={8} lg={7}
        textAlign={"center"}
        height={"100%"}
        width={"100%"}
        alignItems={"center"}
        display={"flex"}
      >
        <div id="plot_div" style={{ width: '100%', height: '80%', margin: "20px", marginTop: "0px" }}></div>
      </Grid>
      <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {description}
          </Box>
        </Modal>
      </div>
    </Grid>
  );
}