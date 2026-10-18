<template>
  <div id="app-container">
    <!-- Componente propio 1: Header de la app -->
    <AppHeader/>

    <!-- RouterView renderiza la vista según la ruta actual -->
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<style>
/* Estilos globales */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #121212;
}

#app-container {
  min-height: 100vh;
}
</style>