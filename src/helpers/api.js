import axios from "axios";

export default {
  async getUsers(page, limit) {
    try {
      const { data } = await axios.get(`https://dummyjson.com/users?limit=${ limit }&skip=${ (page - 1) * limit }`);

      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async getUser(userId) {
    try {
      const { data } = await axios.get(`https://dummyjson.com/users/${ userId }`);

      return data;
    } catch (e) {
      console.log(e);
    }
  }
};