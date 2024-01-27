import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import getDescriptionChart from 'utils/importDescriptionChart';
import DetailedChart from 'components/detailedChart/detailedChart';
import TemporaryDrawer from 'components/layout/mainLayout';
import './App.css';
import { Routes, Route } from "react-router-dom";
import repo from 'utils/chartsList';
import CircularProgress from '@mui/material/CircularProgress';
import Home from 'components/home/home';
import { MATH, EN } from 'utils/const';

const DefaultChartComponent = ({
  module, language
}) => {
  const [chartMiniDescription, setChartMiniDescription] = useState(undefined);
  const [chartDescription, setChartDescription] = useState(undefined);
  const [chartProps, setChartProps] = useState(undefined);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const importChartModule = async () => {
      const { chartDescription, chartProps, chartMiniDescription } = await getDescriptionChart(module, language);
      setChartMiniDescription(chartMiniDescription);
      setChartDescription(chartDescription);
      setChartProps(chartProps);
      setReady(true);
    }
    importChartModule();
  }, [module, language]);

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
          module={module}
        />
      }
    </Grid>
  )
}

function App() {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") === null ? EN : localStorage.getItem("language")
  );

  useEffect(() => {
    setSubject(MATH);
  }, [])

  return (
    <>
      <TemporaryDrawer
        state={open} setState={setOpen}
        subject={subject} setSubject={setSubject}
        setLanguage={setLanguage}
      />
      <Routes>
        <Route
          path={"/"}
          element={<Home subject={subject} setOpen={setOpen} language={language} />}
        />
        {
          repo[subject] !== undefined && repo[subject].map((chart) => {
            if (chart.defaultComponent) return (
              <Route
                key={chart.route}
                path={chart.route}
                element={<DefaultChartComponent module={chart.module} language={language} />}
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
