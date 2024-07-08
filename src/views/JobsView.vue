<!-- TODO HOC 적용 후 미사용 -->
<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
// import { fetchJobsList } from "../api/index";
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
      // jobList: [],
    }
  },
  computed: {
    // ...mapState([
    //   "jobList"
    // ]),
    // jobList() {
    //   return this.$store.state.jobList;
    // }
  },
  created() {
    // fetchJobsList()
    //   .then(response => this.jobList = response.data)
    //   .catch(error => console.log(error));

    // this.emitter.emit("START_LOADING");
    // setTimeout(() => {
    //   this.$store.dispatch("FETCH_JOBS")
    //       .then(() => this.emitter.emit("END_LOADING"));
    // }, 1000);
  },
  mounted() {
    this.emitter.emit("END_LOADING");
  }
}
</script>

<style scoped>

</style>