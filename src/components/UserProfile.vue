<template>
  <div>
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <slot name="username"></slot>
        <div class="time">
          <slot name="time"></slot>
        </div>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState  } from "vuex";

export default {
  props: {
    info: Object
  },
  // computed: {
  //   ...mapState([
  //     "user"
  //   ]),
  // }
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