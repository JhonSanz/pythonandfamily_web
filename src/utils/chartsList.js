import { MATH, STATS } from 'utils/const';

const chartsList = [
  { listName: "Parallelogram law", module: "vectors1", route: "vectors-1", defaultComponent: true },
  { listName: "Cauchy-Schwarz inequalty", module: "vectors2", route: "vectors-2", defaultComponent: true },
  { listName: "Projections and angles", module: "vectors3", route: "vectors-3", defaultComponent: true },
  { listName: "Linear independence", module: "linearIndependence", route: "linear-independence", defaultComponent: true },
  { listName: "Lines in R³", module: "linesR3", route: "lines-r3", defaultComponent: true },
  { listName: "Planes in R³", module: "planesR3", route: "planes-r3", defaultComponent: true },
  { listName: "Vector functions", module: "vectorFunctions", route: "vector-functions", defaultComponent: true },
  { listName: "Taylor polynomial", module: "taylorPolynomial", route: "taylor-polynomial", defaultComponent: true },
];

const chartsListStatistics = [
];

const repo = {}
repo[MATH] = chartsList;
repo[STATS] = chartsListStatistics;
export default repo;
