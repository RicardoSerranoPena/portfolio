<template>
  <div class="full-page dark work" id="work">
    <div class="title">
      <h1>Work</h1>
      <div class="border">
        <span></span>
        <span></span>
      </div>
      <router-link v-for="work in works" :key="work.id" :to="work.url">
        <div @mouseover="changeWork(work.id), work.isHovered = true" @mouseout="work.isHovered = false">
          <font-awesome-icon class="li-icon" v-show="work.isHovered" :icon="['fas', 'angle-right']" />{{work.title}}
        </div>
      </router-link>
    </div>
    <div class="work-container">
      <router-link :to="works[index].url" @mouseover="isHovering = true" @mouseout="isHovering = false">
        <img alt="portfolio image" :class="{applyBlur : isHovering}" :src="require(`../assets/images/${image}`)">
      </router-link>
      <p class="description">{{description}}</p>
      <div class="code-link-container">
        <a :href="works[index].github" target="__blank">
          <font-awesome-icon @mouseover="ghHovered = true" @mouseout="ghHovered = false" v-show="works[index].github" :icon="['fab', 'github']" />
        </a> 
        <p class="ghText" v-show="ghHovered">Take me to the code!</p>
      </div>
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
          isHovered: false,
          github: 'https://github.com/RicardoSerranoPena/TamChayRetreat',
        },
        {
          id: 1,
          title: 'Artesanías Lily',
          url : 'artesaniaslily',
          bg_pic: 'a_home_ss.png',
          description: 'E-commerce website for selling artisan work',
          isHovered: false,
        },
        {
          id : 2,
          title: 'ToDoList',
          url : 'todolist',
          bg_pic: 'tdl_home_ss.png',
          description: 'A todo list web application',
          isHovered: false,
          github: 'https://github.com/RicardoSerranoPena/vue_todolist',
        },
      ],
      index: 0,
      isHovering: false,
      ghHovered: false,
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
    z-index: 25;
  }
  .applyBlur {
    /* filter: blur(1px); */
    transform: scale(1.1);
  }
  .li-icon {
    margin-right: .5rem;
  }
  .code-link-container {
    display: flex;
    flex-direction: row;
    margin-top: .5rem;
  }
  p.ghText {
    margin-top: 4px;
    margin-left: .5rem;
    color: #ececec;
  }
  p.description {
    margin-top: .5rem;
  }
  .code-link-container a{
    color: #ececec;
  }
</style>