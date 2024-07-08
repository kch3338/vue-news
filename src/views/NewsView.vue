<!-- TODO HOC 적용 후 미사용 -->
<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
// import { fetchNewsList  } from "@/api";
// import { mapState } from "vuex";
import ListItem from "../components/ListItem.vue";
// import ListMixIn from "../mixins/ListMixIn";

export default {
  components: {
    ListItem
  },
  // mixins: [
  //   ListMixIn
  // ],
  data() {
    return {
      // newsList: [],
    }
  },
  computed: {
    // ...mapState([
    //   "newsList"
    // ]),
    // newsList() {
    //   return this.$store.state.newsList;
    // }
  },
  created() {
    // fetchNewsList()
    //     .then(response => this.newsList = response.data)
    //     .catch(error => console.log(error));

    // this.emitter.emit("START_LOADING");
    // setTimeout(() => {
    //   this.$store.dispatch("FETCH_NEWS")
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