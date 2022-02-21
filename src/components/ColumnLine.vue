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
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/column-line-combination-data.json"
).then(jsonify);
var schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/column-line-combination-schema.json"
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
        text: "Web visits & downloads"
      },
      subcaption: {
        text: "since 2015"
      },
      yaxis: [
        {
          plot: [
            {
              value: "Downloads",
              type: "column"
            },
            {
              value: "Web Visits",
              type: "line"
            }
          ]
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