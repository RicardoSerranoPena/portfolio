<template>
  <div class="full-page light" id="top">
    <div class="title">
      <h1>{{title}}</h1>
      <Border />
      <h2>{{description}}</h2>
      <div class="tech-stack">
        <font-awesome-icon :icon="['fab', 'wix']" />
      </div>
    </div>
    <TitleImage :image="image" />
    <div class="link-buttons">
      <a href="https://www.artesaniaslily.com/" target="__blank"><font-awesome-icon :icon="['far', 'eye']" />Visit Site</a>
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
  name: 'ArtesaniasLily',
  components: {
    Border,
    ArrowDown,
    Show,
    TitleImage,
  },
  data() {
    return {
      'title' : 'Artesanías Lily',
      'description' : 'E-Commerce CMS Website',
      'image' : 'a_home_ss.png',
      'show' : {
        'details' : {
          'role' : 'Web Developer',
          'date' : 'July 2020',
          'overview' : 'An E-Commerce CMS Website was made for Artesanías Lily.',
        },
        'demoImage' : 'DemoArtesaniasLily.png',
        'copy' : {
          'concept' : 'Artesanias Lily sells authentic hand-crafted artisans and souvenirs from El Salvador. They were looking for a rapid and low-cost solution to expand their business online and adapt to Covid-19. They needed someone with SEO knowledge to stay competitive with other Artesanias Stores in El Salvador. Furthermore, the website needed to be able to synchronize with their other sale channel, which is Facebook.',
          'development' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat nisl id odio feugiat, eget iaculis leo volutpat. Maecenas ex tellus, ultrices placerat ornare posuere, imperdiet ac augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit efficitur augue, vitae tempus tortor. Quisque et velit iaculis, aliquet purus nec, luctus dolor. Maecenas tempus ex et velit vulputate blandit.',
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
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .link-buttons svg {
    margin-right: 8px;
  }
  .link-buttons a {
    font-size: 1.1rem;
    padding: .8rem 1rem;
    background-color: #9FD3C7;
    border-radius: 8px;
    color: black;
    box-shadow: 1px 1px 6px grey;
  }
  .link-hover {
    background-color: #6C929C;
  }
</style>