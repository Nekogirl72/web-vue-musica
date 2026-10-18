<template>
  <div class="page">
    <div class="page-intro">
      <span class="eyebrow"><span></span> VOCES QUE DEJAN HUELLA</span>
      <h1>Artistas por<br /><span>descubrir.</span></h1>
      <p>Historias, estilos y sonidos que han cambiado la manera de escuchar música.</p>
    </div>
    <div class="artists-grid">
      <ArtistCard :artist="item" :key="item.id" v-for="item in artistList" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArtistCard from '../components/ArtistCard.vue'

const artistList = ref([
  { id: 1, name: 'Sleep Token', style: 'Rock alternativo · Reino Unido', bio: 'Leyendas británicas que convirtieron cada concierto en un espectáculo irrepetible.', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=80' },
  { id: 2, name: 'Bad Omens', style: 'Metalcore · Estados Unidos', bio: 'El cuarteto americano que llevó los sentimientos al metal.', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=700&q=80' },
  { id: 3, name: 'Ghost', style: 'Heavy metal · Suecia', bio: 'A Group of Nameless Ghouls.', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=80' }
])
</script>

<style scoped>
.page {
  padding: 60px 0 10px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #a6a2af;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.eyebrow span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}

.page-intro h1 {
  margin: 20px 0 12px;
  color: #f4f2f8;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(3.3rem, 6vw, 4.8rem);
  font-weight: 800;
  letter-spacing: -0.075em;
  line-height: 1;
}

.page-intro h1 span {
  color: var(--accent);
}

.page-intro p {
  max-width: 480px;
  margin: 0;
  color: #a5a2ad;
  font-size: 0.98rem;
  line-height: 1.7;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 40px;
}

@media (max-width: 800px) {
  .artists-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 550px) {
  .page {
    padding-top: 38px;
  }

  .artists-grid {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-top: 30px;
  }

  .page-intro h1 {
    font-size: 3.5rem;
  }
}
</style>
