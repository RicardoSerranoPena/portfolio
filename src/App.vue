<template>
  <div class="main">
    <Header/>
    <MainPage/>
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import MainPage from './components/MainPage';

export default {
  name: 'App',
  components: {
    Header,
    MainPage
  }

}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  body {
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto Slab', serif;
  }
  a {
    color: #ff5252;
    text-decoration: none;
  }
  .full-page {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
  }
  .title {
    position: absolute;
    overflow: hidden;
    margin-left: 10%;
    z-index: 50;
    font-size: 3.5rem;
  }
  .title h1{
    margin-bottom: 1rem;
    color: #ff5252;
  }
  .title p {
    font-size: 0.55em;
    color: #ff5252;
  }
</style>
