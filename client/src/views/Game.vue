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
            <li v-for="player in Game.State.Players" :key="player.Name">
              {{ player.Name }} {{ player.Score}}
            </li>
          </ul>
        </div>
        <div class="card-image">
          <img :src="Game.State.CurrentPicture">
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from "../models/Game";

export default {
  name: 'Game',
  created () {
    Game.Start();
  },
  destroyed() {
    Game.Pause();
  },
  data: () => ({
    Game
  })
}
</script>

<style>

</style>