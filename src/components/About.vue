<template>
  <div class="full-page about" id="about">
    <div class="title">
      <h1>About</h1>
      <Border />
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
import Border from '@/components/Border.vue';

export default {
  name: 'About',
  components : {
    Border,
  }
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
  @media screen and (max-width: 600px) {
    .title {
      margin: 0 0 5% 10%;
      bottom: 0;
      color: #ececec;
    }
    .title h1{
      margin-bottom: 0;
      line-height: 80%;
    }
    .title p {
      font-size: 1.5rem;
    }
    .work-container {
      width: 90%;
      margin: 0 auto 40%;
    }
    .portrait-container {
      width: 100vw;
      margin: 0;
      overflow: hidden;
      text-align: center;
    }
    img {
      width: 130vw;
      height: auto;
      overflow: hidden;
      position: relative;
      top: 15%;
      left: -50px;
    }
  }

</style>