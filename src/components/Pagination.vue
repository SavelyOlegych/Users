<template>
  <div class="pagination">
    <ul class="pagination__items">
      <li
        v-for="item in pagesCount"
        :key="item"
        class="pagination__item"
        :class="{'pagination__item--active': item === page}"
        @click="pageClick(item)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="pagination__limit">
      <div class="pagination__limit-text">Per page</div>
      <ul class="pagination__items">
        <li
          v-for="item in limits"
          :key="item"
          class="pagination__item"
          :class="{'pagination__item--active': item === limit}"
          @click="limitClick(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Pagination",
  data() {
    return {
      limits: [10, 25, 50],
    }
  },
  computed: {
    ...mapGetters([
      "usersCount",
      "limit",
      "page",
    ]),
    pagesCount() {
      return Math.ceil(this.usersCount / this.limit);
    },
  },
  methods: {
    ...mapMutations([
      "SET_LIMIT",
      "SET_PAGE",
    ]),
    ...mapActions([
      "fetchUsers",
    ]),
    pageClick(page) {
      if (this.page !== page) {
        this.SET_PAGE(page);
        this.fetchUsers();
      }
    },
    limitClick(limit) {
      if (this.limit !== limit) {
        this.SET_LIMIT(limit);
        this.SET_PAGE(1);
        this.fetchUsers();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding-bottom: 40px;
  
  &__items {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
    
  &__item {
    color: grey;
    cursor: pointer;
    
    &:not(:last-child) {
      margin-right: 20px;
    }
    
    &--active {
      color: black;
      cursor: default;
    }
  }
  
  &__limit {
    display: flex;
    
    &-text {
      margin-right: 30px;
      color: grey;
    }
  }
}
</style>