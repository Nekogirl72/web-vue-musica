<template>
  <div id="app-container">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="site-footer">
      <span class="footer-mark">♪</span>
      <span>Hecha con amor y mucha IA.</span>
      <span class="footer-note">MUSIAPP · 2025</span>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  font-family: 'DM Sans', sans-serif;
  color: #f3f1f7;
  background: #100f14;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  --surface: #19181f;
  --surface-soft: #201f28;
  --text-muted: #a5a2ad;
  --accent: #b8f268;
  --accent-strong: #99e34a;
}

* {
  box-sizing: border-box;
}

html {
  min-width: 320px;
  background: #100f14;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 50% -30%, rgba(110, 78, 145, 0.18), transparent 55%),
    #100f14;
}

#app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  width: min(1120px, calc(100% - 48px));
  flex: 1;
  margin: 0 auto;
}

.site-footer {
  width: min(1120px, calc(100% - 48px));
  min-height: 78px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 36px auto 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #77747f;
  font-size: 0.82rem;
}

.footer-mark {
  color: var(--accent);
  font-size: 1.15rem;
}

.footer-note {
  margin-left: auto;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

::selection {
  color: #11120e;
  background: var(--accent);
}

@media (max-width: 600px) {
  .main-content,
  .site-footer {
    width: min(100% - 32px, 1120px);
  }
}
</style>