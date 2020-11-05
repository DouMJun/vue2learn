<template>
  <div class="detail-param">
    <div v-for="(item, index) in shopParam" class="param">
      <div>{{ index }} 参数页 {{ shopNum }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParam',
  props: {
    shopParam: {
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
  .detail-param {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .param{
    width: 48%;
    height: 200px;
    background-color: rgb(243, 184, 128);
    margin-bottom: 3px;
  }
</style>