<template>
  <div id="app">
      <MobileHeader v-if="mobileView"/>
      <Header v-if="!mobileView"/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import MobileHeader from '@/components/layouts/MobileHeader'
export default {
  name: 'App',
  components: {
    Header,
    MobileHeader,
  },
  data: () => {
    return {
      mobileView: false,
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 700;
    },
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
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
