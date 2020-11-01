<template>
  <div class="full-page projects" id="projects">
    <transition name="fade">
      <div class="title">
        <h1>Work</h1>
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
  name: 'Work'
}
</script>

<style scoped>
  .projects{
    background-color: #142d4c;
  }
  .title p{
    color: #9fd3c7;
  } 
  .title h1 {
    color: #9fd3c7;
  } 
  .projects span {
    background: white !important;
  }

</style>