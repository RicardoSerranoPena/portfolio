<template>
  <div class="full-page work" id="work">
    <div class="title">
      <h1>Work</h1>
      <div class="border">
        <span></span>
        <span></span>
      </div>
      <div v-for="work in works" :key="work.id">
        <a :href="url" @mouseover="changeWork(work.id)">{{work.title}}</a>
      </div>
    </div>
    <div class="image-container">
      <a :href="url" class="image">
        <img alt="portfolio image" :src="require(`../assets/images/${image}`)">
        <p>{{description}}</p>
      </a>
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
          url : '',
          bg_pic: 'tc_home_ss.png',
          description: 'Website for booking rooms in a homestay.',
        },
        {
          id: 1,
          title: 'Artesanías Lily',
          url : '',
          bg_pic: 'a_home_ss.png',
          description: 'E-commerce website for selling artisan work',
        },
        {
          id : 2,
          title: 'ToDoList',
          url : '',
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
  .work{
    background-color: #142d4c;
  }
  .title p{
    color: #9fd3c7;
  } 
  .title h1 {
    color: #9fd3c7;
  } 
  .work span {
    background: white !important;
  }
  .title li, a{
    font-size: 1.9rem;
    color: #9fd3c7;
    letter-spacing: 0.05em;
    display: block;
  }
  .image-container {
    width: 50%;
    min-width: 400px;
    margin: 0 8% 0 auto;
  }
  img{
    width: 100%;
    height: auto;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }
</style>