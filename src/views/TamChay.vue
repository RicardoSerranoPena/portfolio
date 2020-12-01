<template>
  <div class="full-page light">
    <div class="title">
      <h1>Tâm Chay <br>Retreat <br>Homestay</h1>
      <Border />
      <h2>Room Booking Website</h2>
      <div class="tech-stack">
        <font-awesome-icon :icon="['fab', 'html5']" />
        <font-awesome-icon :icon="['fab', 'css3-alt']" />
        <font-awesome-icon :icon="['fab', 'php']" />
      </div>
    </div>
    <div class="image-container">
      <img alt="portfolio image" :src="require(`../assets/images/tc_home_ss.png`)">
    </div>
    <div class="link-buttons">
      <a href="tamchayretreat.com"><font-awesome-icon :icon="['far', 'eye']" />Visit Site</a>
      <a href="https://github.com/RicardoSerranoPena/TamChayRetreat"><font-awesome-icon :icon="['fab', 'github']" />See Code</a>
    </div>
    <div class="down">
      <router-link to="" v-scroll-to="'#show-page'">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </router-link>
    </div>
  </div>
  <div class="show dark" id="show-page">
    <div class="details">
      <div class="role">
        <h3>ROLE</h3>
        <p>Web Developer</p>
      </div>
      <div class="date">
        <h3>DATE</h3>
        <p>September 2019</p>
      </div>
      <div class="overview">
        <h3>OVERVIEW</h3>
        <p>A room booking website was made for Tâm Chay Retreat Homestay in Tay Ninh Vietnam.</p>
      </div>
    </div>
    <div class="demo-container">
      <img alt="tamchay demo" :src="require('../assets/images/DemoTamChay.png')" />
    </div>
    <div class="tamchay-copy">
      <div class="concept">
        <h2>CONCEPT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat nisl id odio feugiat, eget iaculis leo volutpat. Maecenas ex tellus, ultrices placerat ornare posuere, imperdiet ac augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit efficitur augue, vitae tempus tortor. Quisque et velit iaculis, aliquet purus nec, luctus dolor. Maecenas tempus ex et velit vulputate blandit.
        </p>
      </div>
      <div class="development">
        <h2>DEVELOPMENT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat nisl id odio feugiat, eget iaculis leo volutpat. Maecenas ex tellus, ultrices placerat ornare posuere, imperdiet ac augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit efficitur augue, vitae tempus tortor. Quisque et velit iaculis, aliquet purus nec, luctus dolor. Maecenas tempus ex et velit vulputate blandit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Border from '@/components/Border';

export default {
  name: 'TamChay',
  components: {
    Border,
  },
  data() {
    return {
      'title' : 'Tâm Chay Retreat Homestay',
      'subtitle' : 'Room Booking Website',
      'techstack' : {
        'html-5' : 'fab',
        'css3-alt' : 'fab',
        'php' : 'fab',
      },
      'image' : 'tc_home_ss.png',
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
  .ligth {
    background-color: #ececec;
    color: #142d4c;
  }
  .dark {
    background-color: #142d4c;
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
  .image-container {
    width: 50%;
    margin: 10% 8% 0 auto;
    font-size: 1.5rem;
    color: #ececec;
    overflow: hidden;
    flex-basis: 50%;
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
  .down {
    align-items: center;
    font-size: 2rem;
    flex-basis: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    animation: updown 2s ease infinite;
  }
  .down a {
    color: #142d4c;
  }
  @keyframes updown {
    0% {
      transform: translateY(-40%);
    }

    50% {
      transform: translateY(40%);
    }

    100% {
      transform: translateY(-40%);
    }
  }
  .show {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .details {
    flex-basis: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 4rem 18% 1rem;
    letter-spacing: 0.1em;
  }
  .details h3 {
    color:#9FD3C7;
    font-weight: 500;
    margin-bottom: .5rem;
  }
  .details p {
    color: #ececec;
    font-size: .9rem;
    font-weight: 300;
  }
  .role {
    flex-basis: 25%;
  }
  .date {
    flex-basis: 25%;
  }
  .overview {
    flex-basis: 50%;
  }
  .demo-container {
    width: 80%;
    padding: 1rem 0 2rem;
  }
  .tamchay-copy {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 2rem 5rem;
    width: 75%;
    justify-items: center;
  }
  .concept {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }
  .development {
    display: flex;
    align-items: center;
  }
  .development h2 {
    order: 2;
    text-align: end;
  }
  .tamchay-copy h2 {
    flex-basis: 45%;
    font-size: 2rem;
    color: #9FD3C7;
    letter-spacing: 0.2em;
  }
  .tamchay-copy p {
    flex-basis: 55%;
    text-align: justify;
    color: #ececec;
    font-weight: 350;
  }
</style>