<template>
  <div class="user">
    <div class="user__inner" v-if="user.id">
      <div class="user__image-wrapper">
        <img :src="user.image" alt="avatar" width="300" height="300">
      </div>
      <div class="user__right">
        <h1 class="user__name">{{ user.firstName }} {{ user.lastName }}</h1>
        <div class="user__info-item">Age: {{ user.age }}</div>
        <div class="user__info-item">Gender: {{ user.gender }}</div>
        <div class="user__info-item">City: {{ user.address.city }}</div>
        <div class="user__info-item">Company: {{ user.company.name }}</div>
        <div class="user__info-item">Email: {{ user.email }}</div>
      </div>
    </div>
    <div v-else class="preloader"></div>
  </div>
</template>

<script>
import api from "@/helpers/api";

export default {
  name: "UserDetail",
  data() {
    return {
      user: {},
    }
  },
  async mounted() {
    this.user = await api.getUser(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/preloader";

.user {
  &__inner {
    display: flex;
    justify-content: center;
  }
  
  &__image-wrapper {
    margin-right: 50px;
  }
  
  &__info-item {
    margin-bottom: 20px;
    font-size: 20px;
  }
}
</style>