<template>
  <div class="artist-card">
    <div class="artist-image-wrap">
      <img :src="artist.image" :alt="`Fotografia de ${artist.name}`" class="artist-image" />
      <span class="artist-style">{{ artist.style }}</span>
    </div>
    <div class="artist-info">
      <span class="artist-kicker">ARTISTA DESTACADO</span>
      <h3>{{ artist.name }}</h3>
      <p>{{ artist.bio }}</p>
      <span class="artist-link">Descubre el artista <span aria-hidden="true">↗</span></span>
    </div>
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
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  background: linear-gradient(145deg, #201f27, #19181f);
  color: #e0dee5;
  transition: transform 180ms ease, border-color 180ms ease;
}

.artist-card:hover {
  transform: translateY(-4px);
  border-color: rgba(184, 242, 104, 0.35);
}

.artist-image-wrap {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.artist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;
}

.artist-card:hover .artist-image {
  transform: scale(1.05);
}

.artist-style {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 6px 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 99px;
  background: rgba(16, 15, 20, 0.72);
  color: white;
  font-size: 0.7rem;
  backdrop-filter: blur(8px);
}

.artist-info {
  padding: 18px 19px 20px;
}

.artist-kicker {
  color: var(--accent);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.13em;
}

.artist-card h3 {
  margin: 8px 0 7px;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 1.15rem;
}

.artist-card p {
  min-height: 42px;
  margin: 0;
  color: #aaa7b2;
  font-size: 0.83rem;
  line-height: 1.55;
}

.artist-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 13px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #eae8ef;
  font-size: 0.77rem;
  font-weight: 600;
}

.artist-link span {
  color: var(--accent);
  font-size: 1rem;
}
</style>
