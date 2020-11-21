<template>
  <header>
    <router-link to="/" v-scroll-to="'#main-page'" class="name">RicardoCodes</router-link>
    <div class="header-right">
      <div class="dropdown">
        <router-link to="/#work" v-scroll-to="'#work'">Work</router-link>
        <div class="work-dropdown">
          <router-link to="tamchay">Tâm Chay Retreat</router-link>
          <router-link to="artesaniaslily">Artesanías Lily</router-link>
          <router-link to="todolist">ToDoList</router-link>
        </div>
      </div>
      <router-link to="/#about" v-scroll-to="'#about'">About</router-link>
      <router-link to="/#contact" v-scroll-to="'#contact'">Contact</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 40px 0;
    display: flex;
    justify-content: space-between;
    z-index: 100;
  }
  .name {
    font-size: 1.5rem;
    letter-spacing: 0.08em;
    position: relative;
    color: #9fd3c7;
  }
  .header-right {
    display: flex;
    position: relative;
    vertical-align: baseline;
  }
  .header-right a {
    margin-right: 2rem;
    font-size: 1.5rem;
    letter-spacing: 0.08em;
    color: #9fd3c7;
  }
  .work-dropdown {
    display: none;
    position: absolute;
    background-color: #385170;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 1em;
  }
  .work-dropdown a {
    padding: .5em .6em;
    text-decoration: none;
    display: block;
    letter-spacing: 0.08em;
    margin-right: 0;
    font-size: 1.4rem;
  }
  /* Show the dropdown menu on hover */
  .dropdown:hover .work-dropdown {display: block;}

  /* Change the background color of the dropdown button when the dropdown content is shown */
  a:hover {color: #6C929C;}


</style>