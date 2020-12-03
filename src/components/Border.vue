<template>
  <div class="border" :class="{ dark: isDark }">
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'Border',
  props: ['isDark'],
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
  @media screen and (max-width: 600px) {
    .title .border {
      display: inline-block;
      margin-bottom: 5px;
    }
    .title .border span:first-child {
      margin-bottom: 10px;
    }
  }
</style>