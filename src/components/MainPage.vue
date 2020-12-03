<template>
  <div class="full-page" id="top">
    <div class="title">
      <h1>
        <span class="hello">Hello I'm</span>
        <br>
        Ricardo
      </h1>
      <div class="border">
        <span></span>
        <span></span>
      </div>
      <p>freelance web developer <br> based in Vietnam</p>
    </div>
    <div class="top-image">
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
    background: url(../assets/images/cat.png);
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
</style>