import { h } from "vue";
import ListView from "./ListView.vue";

const createListView = (name) => {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name,
    created() {
      this.emitter.emit("START_LOADING");
      setTimeout(() => {
        this.$store.dispatch("FETCH_ITEMS", this.$route.name)
            .then(() => this.emitter.emit("END_LOADING"));
      }, 300)
    },
    render() {
      return h(ListView);
    }
  }
}

export default createListView;