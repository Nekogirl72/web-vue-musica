<template>
  <div class="page">
    <h1>🎤 Artistes Recomanats</h1>
    <p>Descobreix la trajectòria dels millors músics.</p>

    <div class="artists-grid">
      <ArtistCard :artist="item" :key="item.id" v-for="item in artistList"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArtistCard from '../components/ArtistCard.vue'

const artistList = ref([
  { id: 1, name: 'Queen', style: 'Rock', bio: 'Banda britànica formada a Londres el 1970.' },
  { id: 2, name: 'Daft Punk', style: 'Electrònica', bio: 'Duo musical francès emblemàtic de la música house.' },
  { id: 3, name: 'Rosalía', style: 'Flamenc / Pop', bio: 'Cantant i compositora catalana reconeguda internacionalment.' }
])
</script>

<style scoped>
.page {
  padding: 2rem;
  color: white;
}
.artists-grid {
  margin-top: 1.5rem;
  max-width: 600px;
}
</style>