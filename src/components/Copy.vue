<template>
  <div class="copy">
    <div class="concept">
      <h2>CONCEPT</h2>
      <p>
        {{copy.concept}}
      </p>
    </div>
    <div class="development">
      <h2>DEVELOPMENT</h2>
      <p>
        {{copy.development}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Copy',
  props : ['copy'],
}
</script>

<style scoped>
  .copy {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 2rem 5rem;
    width: 75%;
    justify-items: center;
  }
  .copy h2 {
    flex-basis: 45%;
    font-size: 2rem;
    color: #9FD3C7;
    letter-spacing: 0.2em;
    margin: 1rem;
  }
  .copy p {
    flex-basis: 55%;
    text-align: justify;
    color: #ececec;
    font-weight: 350;
  }
  .concept {
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
  }
  .development {
    display: flex;
    align-items: center;
  }
  .development h2 {
    order: 2;
    text-align: end;
  }
  @media screen and (max-width: 600px) {
    .copy h2 {
      text-align: left;
      margin-left: 0;
    }
    .concept {
      flex-wrap: wrap;
    }
    .development {
      flex-wrap: wrap;
    }
    .development p {
      order: 2;
    }
    .copy h2 {
      flex-basis: 100%;
    }
    .copy p {
      flex-basis: 100%;
    }
  }

</style>