<template>
  <div class="full-contact">
    <div class="full-page dark contact" id="contact">
      <div class="title">
        <h1>{{title}}</h1>
        <Border :isDark="isDark" />
        <a href="mailto:ricardo30499@gmail.com">ricardo30499@gmail.com</a>
        <div class="icons">
          <a href="https://www.linkedin.com/in/ricardoserranopena/" target="__blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
          <a href="https://www.facebook.com/ricardo.serranopena/" target="__blank"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
          <a href="https://api.whatsapp.com/send?phone=+13234434907" target="__blank"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
          <a href="https://chat.zalo.me/?phone=+13234434907" target="__blank"><svg class="svg-inline--fa fa-linkedin fa-w-14" viewBox="0 0 460.1 436.6"><path fill="currentColor" d="M82.6 380.9c-1.8-.8-3.1-1.7-1-3.5 1.3-1 2.7-1.9 4.1-2.8 13.1-8.5 25.4-17.8 33.5-31.5 6.8-11.4 5.7-18.1-2.8-26.5C69 269.2 48.2 212.5 58.6 145.5 64.5 107.7 81.8 75 107 46.6c15.2-17.2 33.3-31.1 53.1-42.7 1.2-.7 2.9-.9 3.1-2.7-.4-1-1.1-.7-1.7-.7-33.7 0-67.4-.7-101 .2C28.3 1.7.5 26.6.6 62.3c.2 104.3 0 208.6 0 313 0 32.4 24.7 59.5 57 60.7 27.3 1.1 54.6.2 82 .1 2 .1 4 .2 6 .2H290c36 0 72 .2 108 0 33.4 0 60.5-27 60.5-60.3v-.6-58.5c0-1.4.5-2.9-.4-4.4-1.8.1-2.5 1.6-3.5 2.6-19.4 19.5-42.3 35.2-67.4 46.3-61.5 27.1-124.1 29-187.6 7.2-5.5-2-11.5-2.2-17.2-.8-8.4 2.1-16.7 4.6-25 7.1-24.4 7.6-49.3 11-74.8 6zm72.5-168.5c1.7-2.2 2.6-3.5 3.6-4.8 13.1-16.6 26.2-33.2 39.3-49.9 3.8-4.8 7.6-9.7 10-15.5 2.8-6.6-.2-12.8-7-15.2-3-.9-6.2-1.3-9.4-1.1-17.8-.1-35.7-.1-53.5 0-2.5 0-5 .3-7.4.9-5.6 1.4-9 7.1-7.6 12.8 1 3.8 4 6.8 7.8 7.7 2.4.6 4.9.9 7.4.8 10.8.1 21.7 0 32.5.1 1.2 0 2.7-.8 3.6 1-.9 1.2-1.8 2.4-2.7 3.5-15.5 19.6-30.9 39.3-46.4 58.9-3.8 4.9-5.8 10.3-3 16.3s8.5 7.1 14.3 7.5c4.6.3 9.3.1 14 .1 16.2 0 32.3.1 48.5-.1 8.6-.1 13.2-5.3 12.3-13.3-.7-6.3-5-9.6-13-9.7-14.1-.1-28.2 0-43.3 0zm116-52.6c-12.5-10.9-26.3-11.6-39.8-3.6-16.4 9.6-22.4 25.3-20.4 43.5 1.9 17 9.3 30.9 27.1 36.6 11.1 3.6 21.4 2.3 30.5-5.1 2.4-1.9 3.1-1.5 4.8.6 3.3 4.2 9 5.8 14 3.9 5-1.5 8.3-6.1 8.3-11.3.1-20 .2-40 0-60-.1-8-7.6-13.1-15.4-11.5-4.3.9-6.7 3.8-9.1 6.9zm69.3 37.1c-.4 25 20.3 43.9 46.3 41.3 23.9-2.4 39.4-20.3 38.6-45.6-.8-25-19.4-42.1-44.9-41.3-23.9.7-40.8 19.9-40 45.6zm-8.8-19.9c0-15.7.1-31.3 0-47 0-8-5.1-13-12.7-12.9-7.4.1-12.3 5.1-12.4 12.8-.1 4.7 0 9.3 0 14v79.5c0 6.2 3.8 11.6 8.8 12.9 6.9 1.9 14-2.2 15.8-9.1.3-1.2.5-2.4.4-3.7.2-15.5.1-31 .1-46.5z"></path></svg></a>
        </div>
      </div>
      <div class="form-container">
        <form class="contact-form"
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit">
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
    <div class="extra-space" >
      <p>Copyright © 2020 RicardoCodes. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
import Border from '@/components/Border.vue';
import axios from "axios";

export default {
  name: 'Contact',
  components: {
    Border,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isDark: true,
      mobileView : false,
      desktopTitle: 'Say Hello',
      mobileTitle: 'Say Hi',
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "contact-form",
          ...this.form
        }),
        axiosConfig
      );
      this.name="";
      this.email="";
      this.message="";
    },
    handleView() {
      this.mobileView = window.innerWidth <= 700;
    },
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
  computed: {
    title() {
      if (this.mobileView) {
        return this.mobileTitle;
      } else {
        return this.desktopTitle;
      }
    },
  }
}
</script>

<style scoped>
  .icons a {
    display: inline;
    margin-right: 1rem;
    width: 30px;
    height: 30px;
  }
  .form-container {
    margin: 0 8% 0 auto;
    display: block;
    font-size: 1.2rem;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    width: 500px;
    max-width: 90vw;
    padding: 1rem;
    background-color: #385170;
    border-radius: 1em;
    -webkit-box-shadow: 7px 7px 17px -1px rgba(0, 4, 8, 0.77);
    -moz-box-shadow: 7px 7px 17px -1px rgba(0, 4, 8, 0.77);
    box-shadow: 7px 7px 17px -1px rgba(0, 4, 8, 0.77);
  }
  .button {
    margin: 1em auto 1em;
    background-color: #E5D05A;
    border-radius: 1em;
    font-size: 1rem;
    width: 10em;
    height: 3.2em;
    color: black;
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
  .full-contact {
    position: relative;
  }
  .extra-space {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #142D4C;
    color: white;
    text-align: center;
    margin: 1rem auto;
  }
  @media screen and (max-width: 600px) {
    .title {
      margin: 15% 0 0 10%;
      top: 0;
    }
    .title h1{
      margin-bottom: 0;
      line-height: 99%;
    }
    .title p {
      font-size: 1.5rem;
    }
    .form-container {
      margin: 85% auto 1rem;
      display: block;
      font-size: 1.2rem;
      bottom: 0;
    }
    .extra-space {
      width: 100%;
      height: 150px;
      position: relative;
      margin: 0;
    }
    .extra-space p {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: white;
      margin: 1rem auto;
    }
  }
</style>