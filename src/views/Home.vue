<template>
  <vue-scroll-snap :fullscreen="true">
      <MainPage/>
      <Work/>
      <About/>
      <Contact/>
  </vue-scroll-snap>
</template>

<script>
import MainPage from '@/components/MainPage';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: 'Home',
  components: {
    MainPage,
    Work,
    About,
    Contact,
    VueScrollSnap,
  }
}
</script>

<style>
  .full-page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #ececec;
    color: #142d4c;
    scroll-snap-align: start;
  }
  .dark {
    background-color: #142d4c;
    color: #9fd3c7;
  }
  .ligth {
    background-color: #ececec;
    color: #142d4c;
  }
  .title {
    position: absolute;
    overflow: hidden;
    margin-left: 10%;
    z-index: 50;
    font-size: 3.5rem;
    letter-spacing: 0.04em;
  }
  .title h1{
    margin-bottom: 1rem;
  }
  .title p, a{
    font-size: 1.9rem;
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
    background: #9fd3c7;
  }
  .dark span {
    background: white !important;
  }
</style>
