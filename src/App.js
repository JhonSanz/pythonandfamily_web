import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import getDescriptionChart from 'utils/importDescriptionChart';
import DetailedChart from 'components/detailedChart/detailedChart';
import TemporaryDrawer from 'components/layout/mainLayout';
import './App.css';
import { Routes, Route } from "react-router-dom";
import chartsList from 'utils/chartsList';
import CircularProgress from '@mui/material/CircularProgress';
import Home from 'components/home/home';

const DefaultChartComponent = ({
  module
}) => {
  const [chartMiniDescription, setChartMiniDescription] = useState(undefined);
  const [chartDescription, setChartDescription] = useState(undefined);
  const [chartProps, setChartProps] = useState(undefined);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const importChartModule = async () => {
      const { chartDescription, chartProps, chartMiniDescription } = await getDescriptionChart(module);
      setChartMiniDescription(chartMiniDescription);
      setChartDescription(chartDescription);
      setChartProps(chartProps);
      setReady(true);
    }
    importChartModule();
  });

  return (
    <Grid>
      {
        !ready && (
          <Grid justifyContent="center" display={"flex"} alignItems="center" height={"100vh"}>
            <CircularProgress />
          </Grid>
        )
      }
      {
        ready && chartDescription && chartProps && <DetailedChart
          miniDescription={chartMiniDescription}
          description={chartDescription}
          chartProps={chartProps}
        />
      }
    </Grid>
  )
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TemporaryDrawer state={open} setState={setOpen} />
      <Routes>
        <Route
          path={"/"}
          element={<Home setOpen={setOpen} />}
        />
        {
          chartsList.map((chart) => {
            if (chart.defaultComponent) return (
              <Route
                key={chart.route}
                path={chart.route}
                element={<DefaultChartComponent module={chart.module} />}
              />
            )
            return <></>;
          })
        }
      </Routes>
    </>
  );
}

export default App;
