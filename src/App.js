import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import getDescriptionChart from 'utils/importDescriptionChart';
import DetailedChart from 'components/detailedChart/detailedChart';

function App() {
  const [chartDescription, setChartDescription] = useState(undefined);
  const [chartProps, setChartProps] = useState(undefined);

  useEffect(() => {
    const importChartModule = async () => {
      const { chartDescription, chartProps } = await getDescriptionChart("conoCircular");
      setChartDescription(chartDescription);
      setChartProps(chartProps);
    }
    importChartModule();
  }, []);

  return (
    <Grid>
      {
        chartDescription && chartProps && <DetailedChart
          description={chartDescription}
          chartProps={chartProps}
        />
      }
    </Grid>
  );
}

export default App;
