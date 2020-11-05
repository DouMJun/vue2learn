<template>
  <div class="cart-list">
    
    <!-- :probe-type="2" 
    @scroll="contentScroll"
    :pullUpLoad="true"
    @pullingUp="loadMoreGoods" -->
      
    <Scroll class="content" ref="scroll" 
    :probe-type="2" 
    :pullUpLoad="true">
      <!-- <div class="cart-item" v-for="item in cartList">{{item.id}}</div>
      <li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li>
      <li>1111</li> <li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li>
      <li>1111</li> <li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li>
      <li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li>
      <li>1111</li> <li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li>
      <li>1111</li> <li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li><li>1111</li>
      <li>1111</li> -->
      <CartListItem 
      v-for="(item, index) in cartList" 
      :key="index"
      :product="item"/>
    </Scroll>
      
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import Scroll from '@components/common/scroll/Scroll'
import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  mounted() {
      // this.$refs.scroll.refresh();
      // console.log(this.$refs.scroll.scroll)
  },
  methods: {
  },
  activated() {
    this.$refs.scroll.refresh();
    console.log(this.$refs.scroll.scroll)
  }
}
</script>

<style scoped>
  .cart-list {
    height: 100vh;
    
  }

  .cart-item {
    height: 100px;
    background-color: red;
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 44px;
    left: 0;
    right: 0;
  }
</style>