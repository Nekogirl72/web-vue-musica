<template>
  <div class="artist-card">
    <h3>{{ artist.name }}</h3>
    <p><strong>Estil:</strong> {{ artist.style }}</p>

```vue
    <p>{{ artist.bio }}</p>
  </div>
</template>

<script setup>
defineProps({
  artist: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.artist-card {
  background: #242424;
  border-left: 4px solid #42b883;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  color: #e0e0e0;
}

.artist-card h3 {
  margin-top: 0;
  color: white;
}
</style>