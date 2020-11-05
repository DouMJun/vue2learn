<template>
  <div class="detail-comment">
    <div v-for="(item, index) in shopComment" class="comment">
      <div>{{ index }} 评论 {{ shopNum }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParam',
  props: {
    shopComment: {
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
  .detail-comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .comment{
    width: 48%;
    height: 200px;
    background-color: rgb(159, 128, 243);
    margin-bottom: 3px;
  }
</style>