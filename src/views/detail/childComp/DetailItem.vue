<template>
  <div class="detail-item">
    <div v-for="(item, index) in shopItem" class="item">
      <div>{{ index }} 商品页 {{ shopNum }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailItem',
  props: {
    shopItem: {
      type: Array,
      default() {
        return []
      }
    },
    shopNum: {
      type: Number,
      default() {
        return 0
      }
    }
  }

}
</script>

<style scoped>
  .detail-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .item{
    width: 48%;
    height: 200px;
    background-color: rgb(191, 235, 156);
    margin-bottom: 3px;
  }
</style>