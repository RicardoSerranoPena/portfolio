<template>
  <div class="full-page about" id="about">
    <div class="title">
      <h1>About</h1>
      <div class="border">
        <span></span>
        <span></span>
      </div>
      <p>Born in El Salvador<br>
        Raised in Los Angeles<br>
        Living in Vietnam!<br>
        I have a passion for <br>
        technology and learning
      </p>
    </div>
    <div class="portrait-container">
      <img alt="self-portrait" src="../assets/images/Ricardo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  .portrait-container {
    height: 100vh;
    margin: 0 8% 0 auto;
    position: relative;
    display: block;
    font-size: 1.5rem;
    overflow: hidden;
  }
  img {
    height: 100vh;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }

</style>