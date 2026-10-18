<template>
  <div class="page">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow"><span></span> TU UNIVERSO MUSICAL</span>
        <h1>La música que<br />te <span>mueve.</span></h1>
        <p>Descubre mis canciones y artistas favoritos. Conocéme un poco mejor y descubre nuevos estilos alternativos.</p>
        <RouterLink class="hero-link" to="/artistes">
          Explora los artistas <span aria-hidden="true">↗</span>
        </RouterLink>
        <div class="hero-stats">
          <div><strong>03</strong><span>Canciones destacadass</span></div>
          <i></i>
          <div><strong>03</strong><span>Artistas por descubrir</span></div>
        </div>
      </div>
      <div class="hero-art">
        <div class="art-glow"></div>
        <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85" alt="Cantant actuant en directe sota els focus" />
        <div class="art-caption">
          <span class="caption-icon">♫</span>
          <span><small>SUBE EL VOLÚMEN</small><strong>Encuentra tu ritmo</strong></span>
        </div>
        <span class="art-index">M / 001</span>
      </div>
    </section>

    <section class="featured">
      <div class="section-heading">
        <div>
          <span class="section-kicker">ESCUCHADO Y QUERIDO</span>
          <h2>Canciones destacadas<span>.</span></h2>
          <p>Clásicos alternativos de rock, metalcore y metal alternativo por repetir.</p>
        </div>
        <span class="section-count">01 — 03</span>
      </div>
      <div class="songs-list">
        <SongCard
          v-for="(song, index) in songs"
          :key="song.id"
          :number="`0${index + 1}`"
          :title="song.title"
          :artist="song.artist"
          :genre="song.genre"
          :cover="song.cover"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SongCard from '../components/SongCard.vue'

const songs = ref([
  { id: 1, title: 'Give', artist: 'Sleep Token', álbum: 'Sundowning · 2019', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: 'Concrete Jungle', artist: 'Bad Omens', álbum: 'OST · 2024', cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=80' },
  { id: 3, title: 'Missilia Amori', artist: 'Ghost', álbum: 'Skeletá · 2025', cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=400&q=80' }
])
</script>

<style scoped>
.page {
  padding: 48px 0 10px;
}

.hero {
  min-height: 420px;
  display: grid;
  grid-template-columns: 1fr 0.88fr;
  align-items: center;
  gap: 48px;
  padding: 28px 0 54px;
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.eyebrow,
.section-kicker {
  color: #a6a2af;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
}

.eyebrow span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px rgba(184, 242, 104, 0.65);
}

h1,
h2 {
  font-family: 'Manrope', sans-serif;
}

.hero h1 {
  margin: 22px 0 15px;
  font-size: clamp(3.4rem, 6.5vw, 5.4rem);
  font-weight: 800;
  letter-spacing: -0.075em;
  line-height: 0.99;
}

.hero h1 span,
.section-heading h2 span {
  color: var(--accent);
}

.hero-copy > p {
  max-width: 420px;
  margin: 0;
  color: #a5a2ad;
  font-size: 0.98rem;
  line-height: 1.7;
}

.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin-top: 25px;
  padding: 13px 17px;
  border-radius: 8px;
  background: var(--accent);
  color: #161713;
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 160ms ease, transform 160ms ease;
}

.hero-link:hover {
  transform: translateY(-2px);
  background: #c9fa85;
}

.hero-link span {
  font-size: 1.05rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 36px;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.hero-stats strong {
  color: #f3f1f7;
  font-family: 'Manrope', sans-serif;
  font-size: 1.03rem;
}

.hero-stats div span {
  color: #8f8b98;
  font-size: 0.7rem;
}

.hero-stats i {
  width: 1px;
  height: 28px;
  background: rgba(255, 255, 255, 0.15);
}

.hero-art {
  position: relative;
  min-width: 0;
  height: 365px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 20px;
  background: #282431;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.32);
}

.hero-art::after {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, transparent 45%, rgba(13, 12, 17, 0.78));
  content: '';
  pointer-events: none;
}

.hero-art > img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
  object-position: center 35%;
}

.art-glow {
  position: absolute;
  top: 10%;
  right: -13%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(171, 121, 226, 0.28);
  filter: blur(70px);
}

.art-caption {
  position: absolute;
  z-index: 1;
  right: 22px;
  bottom: 22px;
  left: 22px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.caption-icon {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  color: var(--accent);
  font-size: 1.4rem;
  backdrop-filter: blur(8px);
}

.art-caption > span:last-child {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.art-caption small {
  color: #d3d0d8;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.art-caption strong {
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
}

.art-index {
  position: absolute;
  z-index: 1;
  top: 19px;
  right: 20px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.13em;
}

.featured {
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin: 0 0 20px;
}

.section-kicker {
  color: var(--accent);
  font-size: 0.61rem;
}

.section-heading h2 {
  margin: 8px 0 4px;
  font-size: 1.65rem;
  font-weight: 700;
  letter-spacing: -0.055em;
}

.section-heading p {
  margin: 0;
  color: #93909b;
  font-size: 0.82rem;
}

.section-count {
  padding-bottom: 4px;
  color: #77747f;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.songs-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

@media (max-width: 850px) {
  .hero {
    grid-template-columns: 1fr 0.82fr;
    gap: 28px;
  }

  .hero-art {
    height: 330px;
  }

  .songs-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .page {
    padding-top: 32px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 38px;
  }

  .hero h1 {
    font-size: clamp(3.5rem, 14vw, 5rem);
  }

  .hero-art {
    height: min(80vw, 360px);
  }

  .section-heading h2 {
    font-size: 1.42rem;
  }

  .section-count {
    display: none;
  }
}
</style>