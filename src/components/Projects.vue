<template>
  <div class="full-page projects" id="projects">
    <transition name="fade">
      <div class="title">
        <h1>Projects</h1>
        <div class="border">
          <span></span>
          <span></span>
        </div>
        <p>websites</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
  .projects{
    background-color: #002171;
  }
  .title p{
    color: white;
  } 
  .title h1 {
    color: white;
  } 
  .projects span {
    background: #ff5252 !important;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
  }
  .fade-enter, .fade-leave-to {
  opacity: 0;
  }

</style>