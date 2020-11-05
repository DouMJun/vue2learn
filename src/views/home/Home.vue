<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" id="cheatTab"
        :titles="['流行','新款','样式']" 
        @tabClick="tabClick" 
        ref="cheatTab"
        v-show="isTabFixed"
        />
    <scroll class="content" ref="scroll" 
    :probe-type="2" 
    @scroll="contentScroll"
    :pullUpLoad="true"
    @pullingUp="loadMoreGoods">
        <home-swiper :banners="banners"  @loadFinish="imgLoadFinish"/>
        <recommend-view :recommends="recommends" />
        <trend/>
        <tab-control class="tab-control"
        :titles="['流行','新款','样式']" 
        @tabClick="tabClick" 
        ref="tabControl"
        />
        <goods-list :list="showGoods"/>
    </scroll>
    <back-top @click.native="backTop" v-show="showBacktop" />
  </div>
</template>

<script>
import navBar from '@components/common/navbar/Nav'
import TabControl from '@components/content/tabControl/TabControl'
import GoodsList from '@components/content/goods/GoodsList'
import Scroll from '@components/common/scroll/Scroll'
import BackTop from '@components/content/backtop/BackTop'


import HomeSwiper from './childComp/homeSwiper'
import RecommendView from './childComp/RecommendView'
import Trend from './childComp/trend'

import { getHomeData, getGoods } from '@network/home'


export default {
  name: 'Home',
  components: {
    navBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    Trend
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop' : {page: 0, list: []},
        'news' : {page: 0, list: []},
        'sell' : {page: 0, list: []}
      },
      tempList: {
        'pop': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        'news': [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        'sell': [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      },
      currentType: 'pop',
      showBacktop: false,
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  created() {
    this.getHomeData()
    this.getGoods('pop')
    this.getGoods('news')
    this.getGoods('sell')
    this.$bus.$on('goodsUpdate', () => {
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    // network
    getHomeData() {
      getHomeData().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      })
    },
    getGoods(type) {
      getGoods(type).then(res => {
        this.goods[type].list.push(...this.tempList[type]);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullingUp();
      }).then(() => {this.$refs.scroll.refresh()})
    },

    //event
    tabClick(index) {
      switch (index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'news';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.cheatTab.selectedIndex = index;
      this.$refs.tabControl.selectedIndex = index;
    },
    backTop() {
      console.log('success')
      this.$refs.scroll.scrollTo(0, 0, 500);//x,y,time_ms
    },
    contentScroll(position){
      //判断backtop是否显示
      this.showBacktop = (position.y) < -150;

      //判断是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop

    },
    loadMoreGoods() {
      this.getGoods(this.currentType)
    },
    imgLoadFinish() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  mounted() {
    
  }

}
</script>

<style scoped>

#home {

  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;

  z-index: 9;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
.tab-control {
  /* top: 44px; */
  background-color: white;
}

#cheatTab {
  position: relative;
  z-index: 9;
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