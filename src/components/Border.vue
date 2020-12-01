<template>
  <div class="border">
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'Border'
}
</script>

<style scoped>
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