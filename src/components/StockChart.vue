<template>
 
<div id="app">
  <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
  ></fusioncharts>
</div>
</template>
<script>
var jsonify = res => res.json();
var dataFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/candlestick-chart-with-y-axis-on-right-data.json"
).then(jsonify);
var schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/candlestick-chart-with-y-axis-on-right-schema.json"
).then(jsonify);

import FusionCharts from 'fusioncharts';
export default {
    data() {
        return {
                width: "100%",
    height: "400",
    type: "timeseries",
    dataFormat: "json",
    dataSource: {
      chart: {},
      caption: {
        text: "Apple Inc. Stock Price"
      },
      subcaption: {
        text: "Stock prices from January 1980 - November 2011"
      },
      yaxis: [
        {
          plot: {
            value: {
              open: "Open",
              high: "High",
              low: "Low",
              close: "Close"
            },
            type: "candlestick"
          },
          format: {
            prefix: "$"
          },
          title: "Stock Value",
          orientation: "right"
        }
      ]
    }
        }
    },
      mounted: function() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      this.dataSource.data = fusionTable;
    });
  }
}
</script>