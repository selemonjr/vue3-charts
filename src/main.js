import { createApp } from 'vue'
import App from './App.vue'
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import TimeSeries from "fusioncharts/fusioncharts.timeseries";

// register VueFusionCharts component
const app = createApp(App)
app.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme,TimeSeries)
app.mount('#app')
