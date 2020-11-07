<template>
  <header>
    <router-link to="/" v-scroll-to="'#main-page'" class="name">Ricardo</router-link>
    <div class="header-right">
      <router-link to="/#work" v-scroll-to="'#work'">Work</router-link>
      <router-link to="/#about" v-scroll-to="'#about'">About</router-link>
      <router-link to="/#contact" v-scroll-to="'#contact'">Contact</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 40px 0;
    display: flex;
    justify-content: space-between;
    z-index: 100;
  }
  .name {
    font-size: 1.5rem;
    letter-spacing: 0.08em;
    position: relative;
    color: #9fd3c7;
  }
  .header-right {
    display: flex;
    position: relative;
    vertical-align: baseline;
  }
  .header-right a {
    margin-right: 2rem;
    font-size: 1.5rem;
    letter-spacing: 0.08em;
    color: #9fd3c7;
  }

</style>