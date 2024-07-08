<template>
  <div>
    <canvas id="lineChart" ref="lineChart" />
  </div>
</template>

<script>
export default {
  methods: {
    drawChart() {
      new this.$_Chart(this.$refs.lineChart, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  },
  mounted() {
    this.drawChart();
  }
}
</script>

<style scoped>

</style>