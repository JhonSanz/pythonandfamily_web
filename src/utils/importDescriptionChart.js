const getDescriptionChart = async (moduleName) => {
  const chartDescriptionModule = await import(`chartsRepository/${moduleName}/description`);
  const chartPropsModule = await import(`chartsRepository/${moduleName}/props`);
  return {
    chartDescription: chartDescriptionModule.description,
    chartMiniDescription: chartDescriptionModule.miniDescription,
    chartProps: chartPropsModule.default,
  }
}

export default getDescriptionChart;
