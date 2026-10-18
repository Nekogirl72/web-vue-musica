<template>
  <div class="page">
    <h1>🎧 Cançons Destacades</h1>
    <p>Aquesta és la teva selecció musical personalitzada.</p>

    <div class="songs-list">
      <!-- Aquí pasamos información del PADRE al HIJO utilizando props (title, artist, genre, cover) -->
      <SongCard :artist="song.artist" :cover="song.cover" :genre="song.genre" :key="song.id" :title="song.title" v-for="song in songs"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SongCard from '../components/SongCard.vue'

// Datos en el componente padre
const songs = ref([
  { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock', cover: '[https://picsum.photos/200?random=1](https://picsum.photos/200?random=1)' },
  { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'Pop / Synthwave', cover: '[https://picsum.photos/200?random=2](https://picsum.photos/200?random=2)' },
  { id: 3, title: 'Hotel California', artist: 'Eagles', genre: 'Classic Rock', cover: '[https://picsum.photos/200?random=3](https://picsum.photos/200?random=3)' }
])
</script>

<style scoped>
.page {
  padding: 2rem;
  color: white;
}
.songs-list {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>