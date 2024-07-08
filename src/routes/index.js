import { createRouter, createWebHistory } from 'vue-router';
// import createListView from "../views/CreateListView";
import store from '../store/index';
import mitt from 'mitt'

const emitter = mitt();

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
    // component: createListView('NewsView'), // HOC
    beforeEnter: (to, from, next) => {
      emitter.emit("START_LOADING");
      store.dispatch("FETCH_ITEMS", to.name)
        .then(() => next());
    }
  },
  {
    path: "/ask",
    name: "ask",
    component: () => import("../views/AskView.vue"),
    // component: createListView('AskView'), // HOC
    beforeEnter: (to, from, next) => {
      emitter.emit("START_LOADING");
      store.dispatch("FETCH_ITEMS", to.name)
        .then(() => next());
    }
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("../views/JobsView.vue"),
    // component: createListView('JobsView'), // HOC
    beforeEnter: (to, from, next) => {
      emitter.emit("START_LOADING");
      store.dispatch("FETCH_ITEMS", to.name)
        .then(() => next());
    }
  },
  {
    path: "/item/:id",
    component: () => import("../views/ItemView.vue"),
  },
  {
    path: "/user/:id",
    component: () => import("../views/UserView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };