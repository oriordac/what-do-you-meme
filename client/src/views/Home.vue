<template>
  <div class="home">
    <section class="container">
      <div class="hero">
        <h1 class="title">Homepage</h1>
      </div>
    </section>
    <section class="section">
      <div class="card">
        <div class="card-content">
          <ul>
            <li v-for="player in Players" :key="player.Name">
              {{ player.Name }} {{ player.Score}}
            </li>
          </ul>
        </div>
        <div class="card-image">
          <img :src="CurrentPicture">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { Players, PictureDeck, CurrentPicture, Init} from "../models/Game";
Init();

export default {
  name: 'Home',
  data: () => ({
    Players, 
    PictureDeck, 
    CurrentPicture,
  }),
  components: {
    
  }
}
</script>

<style>
  .card-image img {
    width: 100%;
  }
</style>
