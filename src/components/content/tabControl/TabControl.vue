<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" 
    :class="{active: index === selectedIndex}"
     @click="onClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      selectedIndex:0
    }
  },
  methods: {
    onClick(index) {
      this.selectedIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 40px;
    text-align: center;
    font-size: 16px;
    
  }

  .tab-control-item {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .tab-control-item>span {
    padding: 10px 5px 0px 5px;
  }
  .active {
    color: red;
  }
  .active>span{
    border-bottom: 2px solid red;
  }
  

</style>