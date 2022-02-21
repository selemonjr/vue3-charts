<template>
<div>
  <Pie2DChart/>
  <ColumnBarCharts/>
  <LineChart/>
  <ColumnLine/>
  <StockChart/>
</div>
</template>

<script>
import Pie2DChart from './components/Pie2DChart.vue'
import ColumnBarCharts from "./components/ColumnBarCharts.vue";
import LineChart from "./components/LineChart.vue";
import ColumnLine from "./components/ColumnLine.vue";
import StockChart from "./components/StockChart.vue";
export default {
  name: 'App',
  components: {
    Pie2DChart,
    ColumnBarCharts,
    LineChart,
    ColumnLine ,
    StockChart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
