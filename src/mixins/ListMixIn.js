export default {
  // 재사용할 컴포넌트 옵션
  created() {
    this.emitter.emit("START_LOADING");
    setTimeout(() => {
      this.$store.dispatch("FETCH_ITEMS", this.$route.name)
        .then(() => this.emitter.emit("END_LOADING"));
    }, 300)
  },
}