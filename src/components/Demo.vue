<template>
  <div class="demo-container">
    <img alt="demo" :src="require(`../assets/images/${demoImage}`)" />
  </div>
</template>

<script>
export default {
  name : 'Demo',
  props : ['demoImage'],
}
</script>

<style scoped>
  .demo-container {
    width: 80%;
    margin: 1rem 0 3rem;
  }
  .demo-container img {
    width: 100%;
  }
</style>