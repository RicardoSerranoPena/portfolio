<template>
  <div class="full-page dark work" id="work">
    <div class="title">
      <h1>Work</h1>
      <div class="border">
        <span></span>
        <span></span>
      </div>
      <router-link v-for="work in works" :key="work.id" :to="work.url">
        <div @mouseover="changeWork(work.id)">{{work.title}}</div>
      </router-link>
    </div>
    <div class="work-container">
      <router-link :to='url' class="image">
        <img alt="portfolio image" :src="require(`../assets/images/${image}`)">
      </router-link>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Work',
  components: {
  },
  data() {
    return {
      works: [
        {
          id: 0,
          title: 'Tâm Chay Retreat',
          url : 'tamchay',
          bg_pic: 'tc_home_ss.png',
          description: 'Website for booking rooms in a homestay.',
        },
        {
          id: 1,
          title: 'Artesanías Lily',
          url : 'artesaniaslily',
          bg_pic: 'a_home_ss.png',
          description: 'E-commerce website for selling artisan work',
        },
        {
          id : 2,
          title: 'ToDoList',
          url : 'todolist',
          bg_pic: 'tdl_home_ss.png',
          description: 'A todo list web application'
        },
      ],
      index: 0,
    }
  },
  methods: {
    changeWork(index) {
      this.index = index;
    }
  },
  computed: {
    image() {
      return this.works[this.index].bg_pic;
    },
    description() {
      return this.works[this.index].description;
    },
    url() {
      return this.works[this.index].url;
    }
  },
}
</script>

<style scoped>
  .work-container {
    width: 50%;
    margin: 0 8% 0 auto;
    font-size: 1.5rem;
    color: #ececec;
    overflow: hidden;
  }
  img{
    width: 100%;
    min-width: 400px;
    max-width: 100vw;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }
</style>