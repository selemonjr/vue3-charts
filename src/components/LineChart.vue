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
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json"
).then(jsonify);
var schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json"
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
        text: "Sales Analysis"
      },
      subcaption: {
        text: "Grocery"
      },
      yaxis: [
        {
          plot: {
            value: "Grocery Sales Value"
          },
          format: {
            prefix: "$"
          },
          title: "Sale Value"
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