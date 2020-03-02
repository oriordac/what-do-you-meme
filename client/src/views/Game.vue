<template>
  <div class="container">
      <div class="card">
          <div class="card-content">
              <h1 class="title is-1">
                  Game Page
              </h1>
          </div>
      </div>
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

</style>