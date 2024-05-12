<template>
  <div class="container">
    <template v-if="usersLoaded">
      <Pagination/>
      <UsersTable/>
    </template>
    <div v-else class="preloader"></div>
  </div>
</template>

<script>
import UsersTable from "@/components/UsersTable.vue";
import Pagination from "@/components/Pagination.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Users",
  components: { Pagination, UsersTable },
  computed: {
    ...mapGetters([
      "users"
    ]),
    usersLoaded() {
      return this.users.length > 0;
    }
  },
  methods: {
    ...mapActions([
      "fetchUsers"
    ]),
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/preloader";
</style>