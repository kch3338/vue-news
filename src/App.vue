<template>
  <div>
<!--    <BarChart />-->
<!--    <LineChart />-->
    <ToolBar />
    <Transition name="page">
      <router-view />
    </Transition>
    <LoadingSpinner :loading="loading" />
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
// import BarChart from "@/components/BarChart.vue";
// import LineChart from "@/components/LineChart.vue";

export default {
  components: {
    // LineChart,
    // BarChart,
    LoadingSpinner,
    ToolBar
    // ToolBar,
    // LoadingSpinner,
  },
  data() {
    return {
      loading: false,
      items: [],
    }
  },
  methods: {
    startLoading() {
      this.loading = true;
    },
    endLoading() {
      this.loading = false;
    },

  },
  mounted() {
    this.emitter.on("START_LOADING", this.startLoading);
    this.emitter.on("END_LOADING", this.endLoading);
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #34495E;
}
a:hover {
  text-decoration: underline;
  color: #42B883;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
