<template>
  <header class="header">
    <div class="logo">🎵 MusiApp</div>
    <nav class="nav">
      <!-- RouterLink para la navegación sin recargar la página -->
      <RouterLink to="/">Inici</RouterLink>
      <RouterLink to="/artistes">Artistes</RouterLink>
      <RouterLink to="/sobre">Sobre nosaltres</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1d1d1d;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav a {
  color: #ccc;
  text-decoration: none;
  font-weight: 500;
}

.nav a.router-link-active {
  color: #42b883;
  border-bottom: 2px solid #42b883;
}
</style>