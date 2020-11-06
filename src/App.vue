<template>
  <div class="main">
    <Header/>
    <MainPage/>
    <Work/>
    <About/>
    <Contact/>
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import MainPage from './components/MainPage';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

export default {
  name: 'App',
  components: {
    Header,
    MainPage,
    Work,
    About,
    Contact
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
  .full-page {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #ececec;
    color: #142d4c;
  }
  .dark {
    background-color: #142d4c;
    color: #9fd3c7;
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
