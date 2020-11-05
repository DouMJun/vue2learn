<template>

  <Scroll class="content"
  :pullUpLoad="true">
   
     <li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li>
      <li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li>
      <li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li><li>111</li>

 
  </Scroll>
</template>

<script>
import BScroll from 'better-scroll'
import Scroll from '@components/common/scroll/Scroll'


export default {
  name: 'Category',
  data() {
    return {
      scroll: null
    }
  },
  components: {
    Scroll,
  },
  mounted() {

  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

</style>