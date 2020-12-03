<template>
  <div class="full-page light" id="top">
    <div class="title">
      <h1>{{title}}</h1>
      <Border />
      <h2>{{description}}</h2>
      <div class="tech-stack">
        <font-awesome-icon :icon="['fab', 'html5']" />
        <font-awesome-icon :icon="['fab', 'css3-alt']" />
        <font-awesome-icon :icon="['fab', 'php']" />
      </div>
    </div>
    <TitleImage :image="image" />
    <div class="link-buttons">
      <a href="tamchayretreat.com" target="__blank"><font-awesome-icon :icon="['far', 'eye']" />Visit Site</a>
      <a href="https://github.com/RicardoSerranoPena/TamChayRetreat" target="__blank"><font-awesome-icon :icon="['fab', 'github']" />See Code</a>
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
  name: 'TamChay',
  components: {
    Border,
    ArrowDown,
    Show,
    TitleImage,
  },
  data() {
    return {
      'title' : 'Tâm Chay Retreat Homestay',
      'description' : 'Room Booking Website',
      'image' : 'tc_home_ss.png',
      'show' : {
        'details' : {
          'role' : 'Web Developer',
          'date' : 'September 2019',
          'overview' : 'A room booking website was made for Tâm Chay Retreat Homestay in Tay Ninh Vietnam.',
        },
        'demoImage' : 'DemoTamChay.png',
        'copy' : {
          'concept' : 'Tam Chay Retreat Homestay is a young business with inconsistent cash flow. Thus, they were looking for a permanent solution for booking rooms that unbounds them from the yearly fees of premium booking software. They also wanted a website that represents their business, which is simple, fluid, and natural. They were delighted with the product and offered me a position as a web developer/technical support for Tam Chay Retreat Homestay and their other projects, Tam Chay Vegan Restaurants, and Dau Do House Preschool. Currently, we are at an early stage of developing Dau Do House Preschool’s website so it truly reflects the nature of their business.',
          'development' : 'Considering the limitation and the expectations for Tâm Chay Retreat’s booking website we first considered Wix, as it provides a plugin with the ability to book rooms; however, this was not a viable option for the current business model of Tâm Chay. Instead, we decided to go through the open source route and implemented an HTML/CSS template and modified it in accordance to Tâm Chay’s look and feel. Furthermore, for the back-end we implemented an open source room booking PHP library that allowed us to further streamlined the development process as it came with a prebuilt admin panel for managing rooms. We did ran into a problem where we could not instantiate both the website’s PHP code and the PHP booking library at the same time, but after great consideration and a bit of creativity we were able to use an iframe and place the PHP library inside it to create a request for a second instance all in the same window.',
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
      line-height: 98%;
    }
    .title p {
      font-size: 1.5rem;
    }
    .link-buttons {
      margin: 0 10% 60%;
    }
  }
</style>