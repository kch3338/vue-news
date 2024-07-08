import axios from "axios";

const config = {
    baseUrl: "https://api.hnpwa.com/v0"
};

const fetchNewsList = () => {
    return axios.get(`${config.baseUrl}/news/1.json`);
}

const fetchAskList = () => {
    return axios.get(`${config.baseUrl}/ask/1.json`);
}

const fetchJobsList = () => {
    return axios.get(`${config.baseUrl}/jobs/1.json`);
}

const fetchUser = (userId) => {
    return axios.get(`${config.baseUrl}/user/${userId}.json`);
}

const fetchItem = (itemId) => {
    return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

const fetchItems = (pageName) => {
    return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUser, fetchItem, fetchItems };