<template>
  <div class="nav-bar">
    <div class="selectAll" @click="selectAll">
      <div class="button" :class="{active: allCheck}"></div> 全选
      </div>
    <div class="total">合计:￥ {{ totalMoney }}</div>
    <div class="count">去计算({{ totalCount }})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'


export default {
  name: 'NavBar',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['cartList', 'totalCount', 'allCheck']),
    totalMoney() {
      return this.$store.state.cartList.filter(item => {
        return item.check;
      }).reduce((preValue, item) => {
        return preValue + item.id * item.count
      }, 0);
    },
    totalCount() {
      return this.$store.state.cartList.filter(item => {
        return item.check;
      }).length;
    },

  },
  methods: {
    selectAll() {

      this.$store.dispatch('stateCheck');
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
    height: 40px;
    text-align: center;
    justify-content: center;
    background-color: #fff;
  }
  .nav-bar div {
    display: flex;
    align-items: center;
  }
  .selectAll {
    justify-content: center;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total {
    flex: 3;
  }
  
  .count {
    justify-content: center;
    flex: 2;
    background-color: yellow;
  }

  .button {
    width: 15px;
    height: 15px;
    border: 1px solid #aaa;
    border-radius: 50%;
  }
  .active {
    background-color: green;
  }
</style>