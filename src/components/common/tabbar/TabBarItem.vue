<template>
  <div class="tab-bar-item" @click="itemClick()" :class="{active: isActive}">
    <div class="item-icon"> 
      <slot name="item-icon"/>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>  
  </div>
</template>


<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
  },
  data () {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .item-icon>img{
    margin-top: 3px;
    height: 26px;
    width: 26px;
  }

  .active {
    color: var(--color-tint);
  }
</style>