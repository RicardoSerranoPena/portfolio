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
      'image' : 'a_home_ss.webp',
      'show' : {
        'details' : {
          'role' : 'Web Developer',
          'date' : 'July 2020',
          'overview' : 'An E-Commerce CMS Website was made for Artesanías Lily.',
        },
        'demoImage' : 'DemoArtesaniasLily.webp',
        'copy' : {
          'concept' : 'Artesanias Lily sells authentic hand-crafted artisans and souvenirs from El Salvador. They were looking for a rapid and low-cost solution to expand their business online and adapt to Covid-19. They needed someone with SEO knowledge to stay competitive with other Artesanias Stores in El Salvador. Furthermore, the website needed to be able to synchronize with their other sale channel, which is Facebook.',
          'development' : 'After careful consideration of the limitations and expectations of Artesanias Lily, we knew the best approach was to use a CMS, such as Wix. However we needed to use a service that provided with an easy access control panel for a non-technical person to be able to add any future products the store acquires. Furthermore, we needed to be able to create the website rapidly and with the ability to work in El Salvador, as most customers are from that region. Apart from these issues, we still had to figure out which CMS would provide us with the ability to synchronize all the store’s products with Facebook, another sale’s channel from Artesanias Lily. We were able to chose Wix after considering all of these limitations and quickly developed a website authentic to Artesanias Lily’s desires and upload all of their products, while staying under budget.',
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
    padding: .8rem 2rem;
    background-color: #E5D05A;
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