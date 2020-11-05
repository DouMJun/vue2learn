<template>
  <div class="detail-bottom"> 
    <div class="shop">店铺</div>
    <div class="collect">收藏</div>
    <div class="cart"  @click="addToCart">加入购物车</div>
    <div class="buy">立即购买</div>
    
  </div>
</template>

<script>
export default {
  name: 'DetailBottom',
  methods: {
    addToCart() {
      this.$emit('addToCart');
    }
  }
}
</script>

<style scoped>
  .detail-bottom {
    height: 44px;
    background-color: white;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;

    display: flex;
    justify-content: space-between;

  }

  .detail-bottom div{
    background-color: yellow;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* //border: 1px solid #ccc; */
    margin: 0px 2px;
  }

  .cart {
    flex: 2;
    
  }

  .buy {
    flex: 2;
  }
  .collect, .shop{
    flex: 1;
  }
</style>