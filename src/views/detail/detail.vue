<template>
  <div id="detail">
    <detail-nav @navClick="navClick" ref="nav"/>
    <scroll class="content" ref="scroll" 
    :probe-type="3" 
    @pullingUp="pullUp"
    :pullUpLoad="true"
    @scroll="scrollContent"
    >
      <detail-swiper :detailImg="swiperImgs" ref="swiper" @load-finish="loadFinish"/>
      <detail-item :shopItem="shopItem" :shopNum="id" ref="item"/>
      <detail-param :shopParam="shopParam" :shopNum="id" ref="param"/>
      <detail-comment :shopComment="shopComment" :shopNum="id" ref="comment"/>
    </scroll>
    <BackTop v-show="showBacktop" @click.native="backTop"/>
    <DetailBottom  @addToCart="addToCart"/>
    <!-- <Toast message="1234" :show="show"/> -->
  </div>
</template>

<script>
import DetailNav from './childComp/DetailNav'
import DetailSwiper from './childComp/DetailSwiper'
import DetailItem from './childComp/DetailItem'
import DetailParam from './childComp/DetailParam'
import DetailComment from './childComp/DetailComment'
import DetailBottom from './childComp/DetaiBottom'
import Scroll from '@components/common/scroll/Scroll'

import { backTopMixin } from '@common/mixin.js'

import { getHomeData } from '@network/home'

export default {
  name: 'Detail',
  data() {
    return {
      id: null,
      swiperImgs:[],
      shopItem: [],
      shopParam: [],
      shopComment: [],
      themeTopY: [],
      currentIndex: 0,
      show:false
    }
  },
  mixins:[backTopMixin],
  components: {
    DetailNav,
    DetailSwiper,
    DetailItem,
    DetailParam,
    DetailComment,
    DetailBottom,
    Scroll,
  },
  created() {
    console.log(this.$route.params);
    this.id = parseInt(this.$route.params.id);//获得当前路由id


    this.getSwiperImg();
    this.shopItem = new Array(10);
    for(let i = 0;i < this.shopItem.length;i++){
      this.shopItem[i] = this.id;
    }
    this.shopParam = new Array(10);
    for(let i = 0;i < this.shopParam.length;i++){
      this.shopParam[i] = this.id;
    }
    this.shopComment = new Array(10);
    for(let i = 0;i < this.shopComment.length;i++){
      this.shopComment[i] = this.id;
    }
  },
  mounted() {
    
  },
  methods: {
    getSwiperImg() {
      getHomeData().then(res =>{
        this.swiperImgs = res.data.banner.list;
      }) 
    },
    pullUp() {
      this.$refs.scroll.refresh();
    },
    navClick(index) {
      this.$refs.scroll.scrollTo(0, this.themeTopY[index], 500);
    },
    loadFinish() {
      this.themeTopY.push(-this.$refs.swiper.$el.offsetTop);
      this.themeTopY.push(-this.$refs.item.$el.offsetTop);
      this.themeTopY.push(-this.$refs.param.$el.offsetTop);
      this.themeTopY.push(-this.$refs.comment.$el.offsetTop);
    },
    scrollContent(position) {
      const y = position.y;
      let index = 0;
      this.showBacktop = y < -1000;

      if(y <= this.themeTopY[3]){
        index = 3;
      }else if(y <= this.themeTopY[2]){
        index = 2
      }else if(y <= this.themeTopY[1]){
        index = 1
      }else{
        index = 0
      }

      if(this.currentIndex !== index){
        this.currentIndex = index;
        console.log(this.currentIndex);
        this.$refs.nav.currentIndex = this.currentIndex;
      }
    },
    addToCart() {
      const product = {};
      product.id = this.id;
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 1000)
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    
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