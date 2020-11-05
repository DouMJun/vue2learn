<template>
  <div>
    <nav-bar >
      <div slot="left" class="back" @click="back">
        <img src="~@assets/img/common/back.svg" alt="">
      </div>
      <div slot="center"  class="title">
        <div class="title-item" v-for="(item, index) in titles" 
        :class="{active: index === currentIndex}"
        @click="onClick(index)"
        >
           {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import navBar from '@components/common/navbar/Nav'


export default {
  name: 'DetailNav',
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex: 0,
      swiperImgs: []
    }
  },
  components: {
    navBar
  },
  methods: {
    onClick(index) {
      this.currentIndex = index
      this.$emit('navClick', this.currentIndex)
    },

    back() {
      this.$router.back()
    }, 
  },

}
</script>


<style scoped>
  .title {
    display: flex;
    font-size: 15px;
  }
  .title-item {
    flex: 1;
  }

  .active {
    color: var( --color-tint);
  }

  .back img{
    margin-top: 12px;
  }
</style>