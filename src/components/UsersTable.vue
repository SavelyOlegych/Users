<template>
  <table class="users-table">
    <thead>
      <tr class="users-table__row users-table__row--head">
        <td class="users-table__column users-table__column--id">ID</td>
        <td class="users-table__column">Name</td>
        <td class="users-table__column">Gender</td>
        <td class="users-table__column">Email</td>
      </tr>
    </thead>
    <tbody>
      <tr
        class="users-table__row users-table__row--body"
        v-for="user in users"
        :key="user.id"
      >
        <td class="users-table__column users-table__column--id">
          <RouterLink :to="'/' + user.id">{{ user.id }}</RouterLink>
        </td>
        <td class="users-table__column">
          <RouterLink :to="'/' + user.id">{{ user.firstName }} {{ user.lastName }}</RouterLink>
        </td>
        <td class="users-table__column">
          <RouterLink :to="'/' + user.id">{{ user.gender }}</RouterLink>
        </td>
        <td class="users-table__column">
          <RouterLink :to="'/' + user.id">{{ user.email }}</RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UsersTable",
  computed: {
    ...mapGetters([
      "users",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.users-table {
  background-color: $whiteColor;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 40px rgba(0, 0, 0, .1);
  border-spacing: 0;
  height: 0;

  &__row {
    &--head {
      height: 50px;
      color: grey;
      
      .users-table__column:first-child {
        padding-left: 25px;
      }
    }

    &--body {
      height: 70px;
      font-size: 14px;

      &:hover {
        box-shadow: 0 4px 32px rgba(0, 0, 0, .1);
      }
    }
  }

  &__column {
    padding: 0;
    width: 30%;
    
    &--id {
      width: 10%;
    }
    
    &:first-child a {
      padding-left: 25px;
    }

    a {
      display: flex;
      align-items: center;
      color: black;
      height: 100%;
    }
  }
}
</style>