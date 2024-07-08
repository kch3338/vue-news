import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./routes/index";
import store from "./store/index";
import mitt from 'mitt';
import chartPlugin from "./plugins/ChartPlugin";

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(router)
  .use(store)
  .use(chartPlugin)
  .mount('#app');
