<template>
  <div class="goods-item" @click="itemClick">
    分类{{ goodsItem }} id :{{ id }}
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsItem: {
      type: Number,
      default() {
        return {}
      }
    },
    id:Number
  },
  updated() {
    this.$bus.$emit('goodsUpdate');
  },
  methods: {
    itemClick() {
      console.log('click')
      this.$router.push('/detail'+this.id)
    }
  }
}
</script>


<style scoped>
  .goods-item {
    width: 40%;
    height: 200px;
    background-color: #fda;
    border-bottom: 2px solid red;
    
  }
</style>