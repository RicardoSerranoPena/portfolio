<template>
  <div class="main">
    <Header/>
    <MainPage/>
    <Projects/>
    <About/>
    <Contact/>
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import MainPage from './components/MainPage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default {
  name: 'App',
  components: {
    Header,
    MainPage,
    Projects,
    About,
    Contact
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
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
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
    scroll-behavior: smooth;
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
    letter-spacing: 0.04em;
  }
  .title p, a{
    font-size: 0.55em;
    color: #ff5252;
    letter-spacing: 0.05em;
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
    background: #002171;
  }
</style>
