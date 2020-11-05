<template>
  <div class="check-button" :class="{active: checked}">
    
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    checked:{
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  
}
</script>


<style scoped>
  .check-button {
    width: 30px;
    height: 30px;
    border: 2px solid #aaa;
    border-radius: 50%;
    background-color: white;
  }

  .active {
    background-color: green;
  }

</style>