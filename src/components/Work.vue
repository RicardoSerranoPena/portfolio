<template>
  <div class="full-page dark work" id="work">
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
    <div class="work-container">
      <a :href="url" class="image">
        <img alt="portfolio image" :src="require(`../assets/images/${image}`)">
      </a>
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