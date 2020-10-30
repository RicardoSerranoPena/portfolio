<template>
  <div class="full-page contact" id="contact">
    <div class="title">
      <h1>Say Hello!</h1>
      <div class="border">
        <span></span>
        <span></span>
      </div>
      <a href="mailto:ricardo30499@gmail.com">ricardo30499@gmail.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
  a {
    display: block;
  }
  .contact{
    background-color: #002171;
  }
  .title a{
    color: white;
  } 
  .title h1 {
    color: white;
  } 
  .contact span {
    background: #ff5252 !important;
  }
</style>