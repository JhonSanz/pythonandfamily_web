import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import getDescriptionChart from 'utils/importDescriptionChart';
import DetailedChart from 'components/detailedChart/detailedChart';
import TemporaryDrawer from 'components/layout/mainLayout';
import './App.css';
import { Routes, Route } from "react-router-dom";
import chartsList from 'utils/chartsList';


const DefaultChartComponent = ({
  module
}) => {
  const [chartDescription, setChartDescription] = useState(undefined);
  const [chartProps, setChartProps] = useState(undefined);

  useEffect(() => {
    const importChartModule = async () => {
      const { chartDescription, chartProps } = await getDescriptionChart(module);
      setChartDescription(chartDescription);
      setChartProps(chartProps);
    }
    importChartModule();
  });

  return (
    <Grid>
      {
        chartDescription && chartProps && <DetailedChart
          description={chartDescription}
          chartProps={chartProps}
        />
      }
    </Grid>
  )
}

const Home = () => {
  return (
    <div>
      <h1>Home :D</h1>
    </div>
  )
}

function App() {
  return (
    <>
      <TemporaryDrawer />
      <Routes>
        <Route
          path={"/"}
          element={<Home />}
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
