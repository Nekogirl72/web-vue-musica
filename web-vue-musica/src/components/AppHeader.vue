<template>
  <header class="header">
    <div class="header-inner">
      <RouterLink class="brand" to="/" aria-label="MusiApp, inici">
        <span class="brand-icon" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        <span>Musi<span class="brand-light">App</span></span>
      </RouterLink>
      <nav class="nav" aria-label="Navegació principal">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/artistes">Artistas</RouterLink>
        <RouterLink to="/sobre">Sobre nosotros</RouterLink>
      </nav>
      <span class="header-tag"><span></span> TU RINCÓN MUSICAL</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(16, 15, 20, 0.78);
  backdrop-filter: blur(18px);
}

.header-inner {
  width: min(1120px, calc(100% - 48px));
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: #f5f3f8;
  font-family: 'Manrope', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.07em;
  text-decoration: none;
}

.brand-light {
  color: var(--accent);
}

.brand-icon {
  height: 24px;
  display: flex;
  align-items: center;
  gap: 3px;
}

.brand-icon i {
  width: 4px;
  border-radius: 5px;
  background: var(--accent);
}

.brand-icon i:nth-child(1),
.brand-icon i:nth-child(4) {
  height: 10px;
}

.brand-icon i:nth-child(2) {
  height: 21px;
}

.brand-icon i:nth-child(3) {
  height: 16px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 7px;
}

.nav a {
  padding: 10px 14px;
  border-radius: 9px;
  color: #aaa7b2;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 160ms ease, background 160ms ease;
}

.nav a:hover,
.nav a.router-link-active {
  color: #f4f2f8;
  background: rgba(255, 255, 255, 0.07);
}

.nav a.router-link-active {
  box-shadow: inset 0 -2px var(--accent);
}

.header-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #83808c;
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.header-tag span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px rgba(184, 242, 104, 0.55);
}

@media (max-width: 700px) {
  .header-inner {
    width: calc(100% - 32px);
    min-height: 68px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px 24px;
    padding: 13px 0 10px;
  }

  .brand {
    margin-right: auto;
  }

  .header-tag {
    display: none;
  }

  .nav {
    order: 1;
    width: 100%;
    justify-content: center;
  }

  .nav a {
    padding: 9px 13px;
  }
}

@media (max-width: 380px) {
  .nav {
    gap: 0;
  }

  .nav a {
    padding: 8px 10px;
    font-size: 0.82rem;
  }
}
</style>
