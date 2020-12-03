<template>
  <div class="down">
    <router-link to="" v-scroll-to="'#next'">
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </router-link>
  </div>
</template>

<script>
export default {
  name : 'ArrowDown',
}
</script>

<style scoped>
  .down {
    align-items: center;
    font-size: 2rem;
    flex-basis: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    animation: updown 2s ease infinite;
  }
  .down a {
    color: #142d4c;
  }
  @keyframes updown {
    0% {
      transform: translateY(-40%);
    }

    50% {
      transform: translateY(40%);
    }

    100% {
      transform: translateY(-40%);
    }
  }
</style>