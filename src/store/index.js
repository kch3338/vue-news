import { createStore } from "vuex";
// import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index";
import mutations from "./mutations";
import actions from "./actions";

const store = createStore({
  state: {
    // newsList: [],
    // askList: [],
    // jobList: [],
    items: [],
    user: {},
    item: {},
  },
  getters: {

  },
  mutations,
  actions
});

export default store;