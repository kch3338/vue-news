import Chart from "chart.js";

export default {
  install(app, options) {
    console.log(options);
    app.config.globalProperties.$_Chart = Chart;
  }
}