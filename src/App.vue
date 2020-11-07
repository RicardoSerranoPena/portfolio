<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
  html {
    font-size: 18px;
    font-family: 'Roboto Slab', serif;
  }
  @media screen and (max-width: 600px) {
    html {
      font-size: 12px;
    }
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  a {
    color: #9fd3c7;
    text-decoration: none;
    display: block;
  }
</style>
