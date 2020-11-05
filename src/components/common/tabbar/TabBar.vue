<template>
   <div id="tab-bar">
      <slot/>
   </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {

  }
}
</script>


<style>
  #tab-bar {
    display: flex;
    background-color: white;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -1px 1px rgba(100, 100, 100,.8);
  }

</style>
