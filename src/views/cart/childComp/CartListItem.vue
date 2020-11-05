<template>
  <div class="list-item">
    <CheckButton :checked="product.check"
     @click.native="clickButton"/>
    <div>￥{{ product.id }}</div>
    <div class="count">X {{ product.count}}</div>
  </div>
</template>

<script>
import CheckButton from '@components/content/checkbutton/CheckButton'

export default {
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    clickButton() {
      this.$store.commit('changeCheck', this.product);
    }
  }

}
</script>


<style scoped>
.list-item {
  height: 100px;
  background-color:white;
  border-bottom: 2px solid #aaa;
  display: flex;
  align-items: center;
}

.count {
  position: fixed;
  right: 10px;

}
</style>