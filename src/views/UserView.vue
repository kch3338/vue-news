<template>
  <div>
    <UserProfile :info="user">
      <template v-slot:username>
        <div>{{ user.id }}</div>
      </template>
      <template v-slot:time>
        <span>Joined {{ user.created }}, </span>
      </template>
      <template v-slot:karma>
        <span>{{ user.karma }}</span>
      </template>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapState } from "vuex";

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapState([
      "user"
    ]),
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>