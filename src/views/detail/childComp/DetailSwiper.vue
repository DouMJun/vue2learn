<template>
  <swiper>
    <swiper-item v-for="item in detailImg">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="$emit('load-finish')">
      </a>
    </swiper-item>
  </swiper>
</template>


<script>
import { Swiper, SwiperItem } from '@components/common/swiper/index'


export default {
  name: 'DetailSwiper',
  components: {
    Swiper, 
    SwiperItem
  },
  props: {
    detailImg: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>