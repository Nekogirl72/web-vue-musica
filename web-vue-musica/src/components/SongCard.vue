<template>
  <div class="song-card">
    <img :src="cover" :alt="title" class="cover-img" />
    <div class="info">
      <h3>{{ title }}</h3>
      <p><strong>Artista:</strong> {{ artist }}</p>
      <p class="genre">{{ genre }}</p>
    </div>
  </div>
</template>

<script setup>
// Declaración explícita de las PROPS que recibe desde el padre
defineProps({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    default: 'General'
  },
  cover: {
    type: String,
    default: 'https://via.placeholder.com/150'
  }
})
</script>

<style scoped>
.song-card {
  display: flex;
  background: #2a2a2a;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  margin-bottom: 1rem;
}

.cover-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.info {
  padding: 0.8rem 1.2rem;
}

.info h3 {
  margin: 0 0 0.4rem 0;
  color: #42b883;
}

.genre {
  font-size: 0.85rem;
  color: #aaa;
}
</style>