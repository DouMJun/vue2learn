<template>
<div>
  <div class="goods-list" >
    <goods-item v-for="(item, index) in list" :goodsItem="item" :id="index">
    </goods-item>
  </div>
  </div>
</template>


<script>
import GoodsItem from './GoodsItem'


export default {
  name: 'GoodsList',
  components: {
    GoodsItem
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  
</style>