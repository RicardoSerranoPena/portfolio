<template>
  <div class="full-page projects" id="projects">
    <div class="title">
      <h1>Work</h1>
      <div class="border">
        <span></span>
        <span></span>
      </div>
        <a href="" @click="changeWork">{{works.tamchay.title}}</a>
        <a href="" @click="changeWork">{{works.artesanias.title}}</a>
        <a>{{works.todoList.title}}</a>
    </div>
    <WorkDisplay :works="works"/>
  </div>
</template>

<script>
import WorkDisplay from './WorkDisplay';

export default {
  name: 'Work',
  components: {
    WorkDisplay,
  },
  data() {
    return {
      works: {
        tamchay : {
          title: 'Tâm Chay Retreat',
          url : '',
          bg_pic: '../assets/images/tc_home_ss.png',
          description: 'Website for booking rooms in a homestay.',
        },
        artesanias : {
          title: 'Artesanías Lily',
          url : '',
          bg_pic: '../assets/images/a_home_ss.png',
          description: 'E-commerce website for selling artisan work',
        },
        todoList : {
          title: 'ToDoList',
          url : '',
          bg_pic: '../assets/images/tl_home_ss.png',
          description: 'A todo list web application'
        },
      },
    }
  },
  methods: {
    changeWork(e) {
      e.preventDefault();

    }
  }
}
</script>

<style scoped>
  .projects{
    background-color: #142d4c;
  }
  .title p{
    color: #9fd3c7;
  } 
  .title h1 {
    color: #9fd3c7;
  } 
  .projects span {
    background: white !important;
  }
  .title li, a{
    font-size: 1.9rem;
    color: #9fd3c7;
    letter-spacing: 0.05em;
    display: block;
  }
</style>