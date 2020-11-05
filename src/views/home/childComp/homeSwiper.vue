<template>
    <Swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="loadFinish">
        </a>
      </swiper-item>
    </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@components/common/swiper/index'

export default {
  name: "homeSwiper",
  components: {
    Swiper, 
    SwiperItem  
  },
  props:{
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    loadFinish() {
      if(!this.isLoad){
        this.$emit('loadFinish');
        this.isLoad = true;
      }
    }
  }
}
</script>