<template>
  <div class="full-page" id="top">
    <div class="title">
      <h1>
        <span class="hello">Hello I'm</span>
        <br>
        Ricardo
      </h1>
      <Border />
      <p>freelance web developer <br> based in Vietnam</p>
    </div>
    <div class="top-image">
    </div>
  </div>
</template>

<script>
import Border from '@/components/Border.vue';

export default {
  name: 'MainPage',
  components : {
    Border,
  }
}
</script>

<style scoped>
  .top-image{
    background: url(../assets/images/cat.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 25;
    position: relative;
    height: 70vh;
    width: 100%;
    max-width: 650px;
    margin: 0 8% 0 auto;
    display: block;
  }
  .hello {
    font-size: .45em;
  }
  @media screen and (max-width: 600px) {
    .top-image {
      margin: 0 0 45%;
      height: 55vh;
    }
    .title {
      margin: 0 0 5% 10%;
      bottom: 0;
    }
    .title h1{
      margin-bottom: 0;
      line-height: 80%;
    }
    .title p {
      font-size: 1.5rem;
    }
  }
</style>