import axios from "axios";

// const baseURL = "https://api.trello.com/1/members/me/boards?key={yourKey}&token={yourToken}'"
const baseURL = "https://api.trello.com/1";

const base = axios.create({
  baseURL,
  params: {
    key: process.env.TRELLO_KEY,
    token: process.env.TRELLO_TOKEN,
  },
});

export default base;
