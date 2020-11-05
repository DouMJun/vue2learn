<template>
  <div class="cart">
    <Nav class="nav">
      <div slot="center">购物车({{cartLength}})</div>
    </Nav>
    <CartList />
    <NavBar/>
  </div>
</template>

<script>
import NavBar from './childComp/NavBar'
import CartList from './childComp/CartList'


import Nav from '@components/common/navbar/Nav'
import {mapGetters} from 'vuex'


export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    Nav,
  },
  data() {
    return {
      commodities:[]
    }
  },
  created() {
  },
  computed: {
    ...mapGetters(['cartLength']),

  }

}
</script>

<style  scoped>
  .nav {
    color: white;
    background-color: var(--color-tint);
  }
  .cart {
    height: 100vh;
    position: relative;
  }
  
</style>