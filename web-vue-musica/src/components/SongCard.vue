<template>
  <div class="song-card">
    <div class="cover-wrap">
      <img :src="cover" :alt="`Portada de ${title}`" class="cover-img" />
      <span class="track-number">{{ number }}</span>
    </div>
    <div class="info">
      <div class="title-row">
        <h3>{{ title }}</h3>
        <span class="song-arrow" aria-hidden="true">↗</span>
      </div>
      <p class="artist">{{ artist }}</p>
      <span class="genre">{{ genre }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    default: '01'
  },
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
    default: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&q=80'
  }
})
</script>

<style scoped>
.song-card {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 17px;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.035);
  color: #f3f1f7;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.song-card:hover {
  transform: translateY(-3px);
  border-color: rgba(184, 242, 104, 0.32);
  background: rgba(255, 255, 255, 0.06);
}

.cover-wrap {
  position: relative;
  flex: 0 0 76px;
  height: 76px;
  border-radius: 10px;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms ease;
}

.song-card:hover .cover-img {
  transform: scale(1.06);
}

.track-number {
  position: absolute;
  bottom: 5px;
  left: 6px;
  color: white;
  font-size: 0.62rem;
  font-weight: 700;
  text-shadow: 0 1px 5px #000;
}

.info {
  min-width: 0;
  flex: 1;
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.info h3 {
  overflow: hidden;
  margin: 0;
  color: #f4f2f8;
  font-family: 'Manrope', sans-serif;
  font-size: 0.96rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song-arrow {
  color: #77747f;
  font-size: 1.1rem;
  transition: color 160ms ease, transform 160ms ease;
}

.song-card:hover .song-arrow {
  transform: translate(2px, -2px);
  color: var(--accent);
}

.artist {
  overflow: hidden;
  margin: 4px 0 9px;
  color: #aaa7b2;
  font-size: 0.83rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.genre {
  display: inline-flex;
  padding: 4px 8px;
  border-radius: 99px;
  background: rgba(184, 242, 104, 0.09);
  color: #c0ed91;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.025em;
}
</style>
