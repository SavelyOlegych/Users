<template>
  <div class="container">
    <template v-if="usersLoaded">
      <UsersTable/>
    </template>
    <div v-else class="preloader"></div>
  </div>
</template>

<script>
import UsersTable from "@/components/UsersTable.vue";

export default {
  name: "Users",
  components: { UsersTable },
  computed: {
    usersLoaded() {
      return this.$store.getters.users.length > 0;
    }
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/preloader";
</style>