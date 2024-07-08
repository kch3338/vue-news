<!-- TODO HOC 적용 후 미사용 -->
<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
// import { fetchAskList } from "../api/index";
import ListItem from "../components/ListItem.vue";
// import ListMixIn from "../mixins/ListMixIn";
// import { mapState } from "vuex";

export default {
  components: {
    ListItem
  },
  // mixins: [
  //   ListMixIn
  // ],
  data() {
    return {
      // askList: [],
    }
  },
  computed: {
    // ...mapState([
    //   "askList"
    // ]),
    // askList() {
    //   return this.$store.state.askList;
    // }
  },
  // mount 단계 이후로 데이터 요청 시 화면이 다시 렌더링 되므로 created 또는 beforeMount 단계에서 데이터 요청하도록 해야 함
  created() {
    // fetchAskList()
    //   .then(response => this.askList = response.data)
    //   .catch(error => console.log(error));

    // this.emitter.emit("START_LOADING");
    // setTimeout(() => {
    //   this.$store.dispatch("FETCH_ASK")
    //     .then(() => this.emitter.emit("END_LOADING"));
    // }, 1000);
  },
  mounted() {
    this.emitter.emit("END_LOADING");
  }
}
</script>

<style scoped>

</style>