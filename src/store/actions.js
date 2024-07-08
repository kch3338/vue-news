import { fetchAskList, fetchJobsList, fetchNewsList, fetchUser, fetchItem, fetchItems } from "@/api";

export default {
  FETCH_NEWS({ commit }) {
    return fetchNewsList()
      .then((response) => {
        commit("SET_ITEMS", response.data);
        return response;
      })
      .catch(error => console.log(error));
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then((response) => {
        commit("SET_ITEMS", response.data);
        return response;
      })
      .catch(error => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then((response) => {
        commit("SET_ITEMS", response.data);
        return response;
      })
      .catch(error => console.log(error));
  },
  async FETCH_USER({ commit }, userId) {
    const response = await fetchUser(userId);
    commit("SET_USER", response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, itemId) {
    const response = await fetchItem(itemId);
    commit("SET_ITEM", response.data);
    return response;
  },
  async FETCH_ITEMS({ commit }, pageName) {
    try {
      const response = await fetchItems(pageName);
      commit("SET_ITEMS", response.data);
      return response; // return Promise
    } catch(error) {
      console.log(error);
    }

  }
}