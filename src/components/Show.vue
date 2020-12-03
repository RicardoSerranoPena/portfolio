<template>
  <div class="show dark" id="next">
    <Details :details="show.details" />
    <Demo :demoImage="show.demoImage" />
    <Copy :copy="show.copy" />
  </div>
</template>

<script>
import Details from '@/components/Details';
import Copy from '@/components/Copy';
import Demo from '@/components/Demo';

export default {
  name : 'Show',
  props : ['show'],
  components : {
    Details,
    Copy,
    Demo,
  }
}
</script>

<style scoped>
  .show {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>