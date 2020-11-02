<template>
  <a href="" class="image-container image">
    <div class="image-over">
    </div>
    <p>{{works.tamchay.description}}</p>
  </a>
</template>

<script>
export default {
  name: 'WorkDisplay',
  props: {
    works: []
  }
}
</script>

<style scoped>
  .image-container {
    background: url(../assets/images/tc_home_ss.png) no-repeat top;
    background-size: cover;
  }
  .image {
    display: block;
    position: relative;
    width: 50%;
    height: 50%;
    margin: 0 8% 0 auto;
    -webkit-box-shadow: 0 80px 140px -40px rgba(0, 0, 0, 0.6);
    box-shadow: 0 80px 140px -40px rgba(0, 0, 0, 0.6)
  }
  .image-over {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
</style>