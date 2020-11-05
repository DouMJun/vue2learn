<template>
  <div class="toast">
    <div v-show="isShow">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, time) {
      this.isShow = true;
      this.message = message;
      console.log('show');
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, time)
    }
  }
}
</script>

<style scoped>
  .toast {
    color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:rgba(0, 0, 0, .6);

    border: 1px;
    border-radius: 15px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toast div{
    padding: 10px 25px;
  }
</style>