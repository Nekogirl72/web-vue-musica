<template>
  <div class="page">
    <section class="about-hero">
      <span class="eyebrow"><span></span> DETRÁS DEL SONIDO</span>
      <h1>Un pequeño homenaje<br />a la <span>música.</span></h1>
      <p>Este espacio nace para compartir canciones y artistas que nos hacen sentir algo. Porque la música siempre encuentra su camino.</p>
      <div class="about-note">
        <span class="note-icon">♫</span>
        <div>
          <strong>Creado para personas que escuchan de verdad.</strong>
          <p>2º DDTEC · WEB DINÁMICA</p>
        </div>
      </div>
    </section>
    <section class="tech-section">
      <span class="section-kicker">¿CÓMO SE HA HECHO?</span>
      <h2>La tecnología que hay detrás<span>.</span></h2>
      <div class="tech-grid">
        <div class="tech-card"><span class="tech-number">01</span><strong>Vue 3</strong><span>Interfície reactiva</span></div>
        <div class="tech-card"><span class="tech-number">02</span><strong>Vue Router</strong><span>Navegación fluida</span></div>
        <div class="tech-card"><span class="tech-number">03</span><strong>Firebase</strong><span>Publicación web</span></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  padding: 70px 0 20px;
}

.about-hero {
  max-width: 760px;
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

.about-hero h1 {
  margin: 22px 0 16px;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(3rem, 6vw, 4.7rem);
  font-weight: 800;
  letter-spacing: -0.075em;
  line-height: 1.02;
}

.about-hero h1 span,
.tech-section h2 span {
  color: var(--accent);
}

.about-hero > p {
  max-width: 590px;
  margin: 0;
  color: #a5a2ad;
  font-size: 1rem;
  line-height: 1.8;
}

.about-note {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 570px;
  margin-top: 30px;
  padding: 17px 19px;
  border: 1px solid rgba(184, 242, 104, 0.16);
  border-radius: 12px;
  background: rgba(184, 242, 104, 0.045);
}

.note-icon {
  width: 42px;
  height: 42px;
  display: grid;
  flex: 0 0 42px;
  place-items: center;
  border-radius: 11px;
  background: rgba(184, 242, 104, 0.11);
  color: var(--accent);
  font-size: 1.4rem;
}

.about-note strong {
  font-size: 0.87rem;
}

.about-note p {
  margin: 4px 0 0;
  color: #a5a2ad;
  font-size: 0.78rem;
}

.tech-section {
  margin-top: 70px;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
}

.section-kicker {
  color: var(--accent);
  font-size: 0.61rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.tech-section h2 {
  margin: 9px 0 20px;
  font-family: 'Manrope', sans-serif;
  font-size: 1.65rem;
  letter-spacing: -0.05em;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
}

.tech-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.035);
}

.tech-number {
  color: var(--accent);
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.11em;
}

.tech-card strong {
  margin-top: 4px;
  font-family: 'Manrope', sans-serif;
  font-size: 1.05rem;
}

.tech-card > span:last-child {
  color: #93909b;
  font-size: 0.79rem;
}

@media (max-width: 600px) {
  .page {
    padding-top: 45px;
  }

  .tech-section {
    margin-top: 50px;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
