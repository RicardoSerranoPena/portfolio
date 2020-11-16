<template>
  <div class="full-page dark contact" id="contact">
    <div class="title">
      <h1>Say Hi!</h1>
      <div class="border">
        <span></span>
        <span></span>
      </div>
      <a href="mailto:ricardo30499@gmail.com">ricardo30499@gmail.com</a>
    </div>
    <div>
      <form class=form-container
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="onSubmit"
        >
        <input type="hidden" name="form-name" value="contact-form" />
        <label for="name">Name</label>
        <input id="name" v-model="name">
        <label for="email">Email</label>
        <input id="email" v-model="email">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" placeholder="Write here what you want to say"></textarea>
        <input class="button" type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    // onSubmit() {
    //   let submittedForm = {
    //     name: this.name,
    //     email: this.email,
    //     message: this.message,
    //   } 
    //   this.$emit('message-submitted', submittedForm)

    //   this.name="",
    //   this.email="",
    //   this.message="",
    // },
  },
}
</script>

<style scoped>
  .form-container {
    border-width: 2px;
    border-color: black;
    z-index: 25;
    position: relative;
    height: 70vh;
    width: 100%;
    max-width: 650px;
    margin: 0 8% 0 auto;
    display: block;
  }

</style>