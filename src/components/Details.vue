<template>
  <div class="details">
    <div class="role">
      <h3>role</h3>
      <p>{{details.role}}</p>
    </div>
    <div class="date">
      <h3>date</h3>
      <p>{{details.role}}</p>
    </div>
    <div class="overview">
      <h3>overview</h3>
      <p>{{details.overview}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Details',
  props : ['details']
}
</script>

<style scoped>
  .details {
    flex-basis: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 4rem 18% 1rem;
    letter-spacing: 0.1em;
  }
  .details h3 {
    color:#9FD3C7;
    font-weight: 500;
    margin-bottom: .5rem;
    text-transform: uppercase;
  }
  .details p {
    color: #ececec;
    font-size: .9rem;
    font-weight: 300;
  }
  .role {
    flex-basis: 25%;
  }
  .date {
    flex-basis: 25%;
  }
  .overview {
    flex-basis: 50%;
  }
</style>