<template>
  <div id="app">
    <div id="chart-container">
      <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataformat="dataFormat"
      :dataSource="dataSource"
      >
      </fusioncharts>
    </div>
  </div>
</template>
<script>
const chartData = [
    {
            "label": "Food",
            "value": "5000"
        },
        {
            "label": "Apparels",
            "value": "146330"
        },
        {
            "label": "Electronics",
            "value": "105070"
        },
        {
            "label": "Household",
            "value": "49100"
        }
  ];

// STEP 3: Configure your chart
const dataSource = {
  chart: {
      caption: "Split of revenue by product categories",
        subCaption: "Last year",
        numberPrefix: "$",
        showPercentInTooltip: "0",
      decimals: "1",
        useDataPlotColorForLabels: "1",
        theme: "fusion"
  },
  data: chartData
  };

export default {
  name: 'app',
  data() {
    return {
      value:"",
      data:[],
      "type": "pie2d",
      "renderAt": "chart-container",
      "width": "550",
      "height": "350",
      "dataFormat": "json",
      dataSource
    }
  },
};
</script>

