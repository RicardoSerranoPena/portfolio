<template>
  <header>
    <a href="#" class="name">Ricardo</a>
    <div class="header-right">
      <a href="#">Projects</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
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
    letter-spacing: 0.1em;
    position: relative;
  }
  .header-right {
    display: flex;
    position: relative;
    vertical-align: baseline;
  }
  .header-right a {
    display: block;
    margin-right: 2rem;
    font-size: 1.5rem;
    letter-spacing: 0.1em;
  }

</style>