<template>
  <div class="full-page light" id="top">
    <div class="title">
      <h1>{{title}}</h1>
      <Border />
      <h2>{{description}}</h2>
      <div class="tech-stack">
        <font-awesome-icon :icon="['fab', 'html5']" />
        <font-awesome-icon :icon="['fab', 'css3-alt']" />
        <font-awesome-icon :icon="['fab', 'vuejs']" />
      </div>
    </div>
    <TitleImage :image="image" />
    <div class="link-buttons">
      <a href="https://goofy-booth-7c199e.netlify.app" target="__blank"><font-awesome-icon :icon="['far', 'eye']" />Visit Site</a>
      <a href="https://github.com/RicardoSerranoPena/vue_todolist" target="__blank"><font-awesome-icon :icon="['fab', 'github']" />See Code</a>
    </div>
    <ArrowDown />
  </div>
  <Show :show="show" />
</template>

<script>
import Border from '@/components/Border';
import TitleImage from '@/components/TitleImage';
import ArrowDown from '@/components/ArrowDown';
import Show from '@/components/Show';

export default {
  name: 'ToDoList',
  components : {
    Border,
    TitleImage,
    ArrowDown,
    Show,
  },
  data() {
    return {
      'title' : 'ToDoList',
      'description' : 'VueJS ToDoList web application',
      'image' : 'tdl_home_ss.png',
      'show' : {
        'details' : {
          'role' : 'Web Developer',
          'date' : 'August 2019',
          'overview' : 'Personal Project: A ToDo list app using VueJS framework.',
        },
        'demoImage' : 'DemoToDoList.png',
        'copy' : {
          'concept' : 'This personal project was made with the vision of having a web application that was able to be utilized as a To-do list. Users needed to have the ability to interact with this website seamlessly, similar to the way they would use an application. Furthermore, we needed to use a modern front-end framework to accomplish this, and feed the application some data to be able to display and test its usage was the desired one.',
          'development' : 'We developed this To-do list using VueJS for its reactivity that allowed for the user to truly interact with this website. Using VueJS we were able to make this web application as interactive as possible. We implemented an API that provided us with different todos to feed our application to learn the way to make requests and receive responses, format them and place them inside our ToDoList web application.',
        },
      },
    }
  },
}
</script>

<style scoped>
  html {
    background-color: #142d4c;
  }
  .full-page {
    flex-wrap: wrap;
  }
  .dark {
    color: #ececec;
  }
  .title {
    position: absolute;
    overflow: hidden;
    margin: 0 40% 5% 8%;
    z-index: 50;
    font-size: 1.9rem;
    letter-spacing: 0.04em;
    flex-basis: 50%;
  }
  .title h1{
    margin-bottom: 1rem;
  }
  .title h2 {
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  .title p, a{
    font-size: 1.9rem;
  }
  .tech-stack svg {
    margin-right: 2rem;
    margin-top: 1rem;
    font-size: 2.5rem;
  }
  .link-buttons {
    flex-basis: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    margin: 0 30% 0;
    align-items: center;
    text-align: center;
  }
  .link-buttons svg {
    margin-right: 8px;
  }
  .link-buttons a {
    width: 35%;
    font-size: 1.1rem;
    padding: .8rem 8px;
    background-color: #9FD3C7;
    border-radius: 8px;
    color: black;
    box-shadow: 1px 1px 6px grey;
  }
  .link-hover {
    background-color: #6C929C;
  }
  @media screen and (max-width: 600px) {
    .title {
      margin: 0 0 5% 10%;
      bottom: 10px;
    }
    .title h1{
      margin-bottom: 10px;
    }
    .title p {
      font-size: 1.5rem;
    }
    .link-buttons {
      margin: 0 10% 60%;
    }
  }
</style>