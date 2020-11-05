import BackTop from '@components/content/backtop/BackTop'

export const backTopMixin = {
  components: { 
    BackTop
  },
  data() {
    return {
      showBacktop: false
    }
  },
  methods: {
    backTop() {
      console.log('success')
      this.$refs.scroll.scrollTo(0, 0, 500);//x,y,time_ms
    }
  }

}