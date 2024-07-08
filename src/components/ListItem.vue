<template>
  <div>
    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="item-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <template v-if="item.user">
              <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            </template>
            <template v-else>
              <a :href="item.url">{{ item.domain }}</a>
            </template>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      "items"
    ]),
  },
  created() {
    // const name = this.$route.name;
    // if(name === "news") {
    //   this.$store.dispatch("FETCH_NEWS");
    // } else if(name === "ask") {
    //   this.$store.dispatch("FETCH_ASK");
    // } else if(name === "jobs") {
    //   this.$store.dispatch("FETCH_JOBS");
    // }
  }
}
</script>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #EEEEEE;
}
.points {
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42B883;
}
.item-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>