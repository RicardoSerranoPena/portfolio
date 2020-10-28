<template>
  <div class="full-page">
    <div class="title">
      <h1>Hello I'm
        <br>
        Ricardo
      </h1>
      <div class="border js-letter" style="transform: translateX(0%) translateZ(0px);">
        <span></span>
        <span class="js-letter" style="transform: translateX(0%) translateZ(0px);"></span>
      </div>
      <p>I'm a freelance web developer</p>
    </div>
    <div class="top-image">
      <a href="#"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style scoped>
  .top-image{
    background: url(../assets/Ricardo.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 25;
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 650px;
    margin: 0 8% 0 auto;
    display: block;

  }
  .top-image a{
    height: 100%;
    max-width: 400px;
  }
  .title .border {
    display: inline-block;
    margin-bottom: 0.4em;
  }
  .title .border span:first-child {
    margin-bottom: 0.3em;
  }
  .title .border span:last-child {
      margin-left: 54px;
  }
  .title .border span {
    display: block;
    width: 88px;
    height: 4px;
    border-radius: 5px;
    background: #0d47a1;
  }

</style>