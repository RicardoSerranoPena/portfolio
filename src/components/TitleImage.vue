<template>
  <div class="image-container">
    <img alt="portfolio image" :src="require(`../assets/images/${image}`)">
  </div>
</template>

<script>
export default {
  name : 'TitleImage',
  props : ['image'],
}
</script>

<style scoped>
  .image-container {
    width: 50%;
    margin: 10% 8% 0 auto;
    font-size: 1.5rem;
    color: #ececec;
    overflow: hidden;
    flex-basis: 50%;
  }
  img{
    width: 100%;
    min-width: 400px;
    max-width: 100vw;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
    z-index: 25;
  }
  @media screen and (max-width: 600px) {
    .image-container {
      flex-basis: 100%;
      width: 80%;
      margin: 15% 5px 1rem;
    }
    .image-container img {
      max-width: 100%;
      min-width: 200px;
    }
  }
</style>