import axios from "axios";

export default {
  async getUsers() {
    try {
      /*
      решил использовать ресурс dummyjson.com, а не тот, который указан в ТЗ, потому что тот не всегда корректно генерирует
      id пользователя, а это нужно для роутинга
       */
      const { data } = await axios.get("https://dummyjson.com/users");

      return data.users;
    } catch (e) {
      console.log(e);
    }
  },
};