<template>
  <div class="full-page dark contact" id="contact">
    <div class="title">
      <h1>Say Hello!</h1>
      <div class="border">
        <span></span>
        <span></span>
      </div>
      <a href="mailto:ricardo30499@gmail.com">ricardo30499@gmail.com</a>
      <font-awesome-icon :icon="['fas', 'user-secret']" />
      <font-awesome-icon :icon="['fab', 'linkedin']" />

    </div>
    <div class="form-container">
      <form class="contact-form"
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
        <textarea id="message" v-model="message" placeholder="Write here your questions, inquiries, and comments. I'll reply as soon as I can."></textarea>
        <input class="button" type="submit" value="Send Message">
      </form>
    </div>
  </div>
</template>

<script>
import {faCircle} from '@fortawesome/free-solid-svg-icons'

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
    onSubmit() {
      
      this.name="";
      this.email="";
      this.message="";
    },
  },
  computed: {
    icon() {
      return faCircle;
    }
  }
}
</script>

<style scoped>
  .form-container {
    margin: 0 8% 0 auto;
    display: block;
    font-size: 1.2rem;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 1rem;
    background-color: #385170;
    border-radius: 1em;
    -webkit-box-shadow: 7px 7px 17px -1px rgba(0, 4, 8, 0.77);
    -moz-box-shadow: 7px 7px 17px -1px rgba(0, 4, 8, 0.77);
    box-shadow: 7px 7px 17px -1px rgba(0, 4, 8, 0.77);
  }
  .button {
    margin: 1em auto 1em;
    background-color: #C6E0DA;
    border-radius: 1em;
    font-size: 1rem;
    width: 10em;
    height: 3.2em;
    color: #142D4C;
    padding: 1em;
    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    text-align: center;
    cursor: pointer;
  }
  textarea {
    color: white;
    width: 100%;
    height: 5rem;
    margin-bottom: 1em;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #999;
  }
  label {
    margin: .3em 0;
  }
  input {
    outline: none;
    -webkit-appearance: unset !important;
    -webkit-transition: 0.3s ease;
    box-sizing: border-box;
    width: 100%;
    display: block;
    border: none;
    color: #fff;
    background: transparent;
    border-bottom: 1px solid #999;
    padding: .3em 0;
        transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    -ms-transition: 0.3s ease;
    padding-top: .4em;
    margin-bottom: .3em;
    -webkit-appearance: none;
  }

</style>