<div align="center">

# ♪ MusiApp

### Tu universo musical

Una página sencilla con 3 apartados donde puedes conocer artitas y canciones nuevas.

[Abrir MusiApp](https://web-vue-musica.web.app)

</div>

---

## Sobre el projecte

MusiApp es una web dedicada a la música. En la página principal puedes encontrar canciones destacadas. En la página de **Artistas**, varios artistas favoritos con sus estilos y en la sección de **Sobre nosotros**, encontrarás información sobre la web y sus tecnologías.
La temática usada es sencilla, animada y que recuerda a aplicaciones del sector.

## Tecnologías

- **Vue 3** — interfície construida con Composition API y componentes.
- **Vue Router** — navegación entre las páginas sin recargar.
- **Vite** — servidor de desarrollo y compilación para producción.
- **Firebase Hosting** — alojamiento de la web.

## Cómo abrir y ejecutar el proyecto

### Requisitos

- Node.js **22.18 o superior** (o **24.12 o superior**).
- npm.

### Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```sh
git clone https://github.com/Nekogirl72/web-vue-musica.git
cd web-vue-musica
npm install
```

### Modo desarrollo

Puedes usar http-server o:
```sh
npm run dev
```

Abre en el navegador la dirección local que indique Vite o http-server, normalmente (http://localhost:5173) o (http://192.168.1.102:8080).

### Compilar y previsualizar

Para generar la versión de producción:

```sh
npm run build
```

Para previsualizar localmente los ficheros compilados:

```sh
npm run preview
```

Para subir al hosting:

```sh
npm run build
```
```sh
firebase deploy
```

Los ficheros de producción se generan a `dist/`.

### Comunicación padre/ hijo

En mi web, el componente padre (HomeView.vue) obtiene los datos de Firestore y el hijo (SongCard.vue) las recibe mediante props para mostrar la tarjeta de cada canción.

El hijo recibe los datos de la canción y las declara con defineProps.

El padre lee los datos recibidos de Firestore, importa el componente hijo (SongCard) y le pasa la información de cada canción usando :cancion="cancion".

### Las 3 rutas

1. HomeView (inicio):
Conecta con Firestore, escribe el catálogo de canciones dinámico mediante componentes hijos y gestionas los estados de carga, error y vacío.

2. ArtistsView (Artistas):
Página con artistas que aporta información.

3. AboutView (Sobre nosotros):
Página informativa sobre la web y las tecnologías utilizadas durante el desarrollo.

### Colección Firestore

La colección utilizada se llama canciones>  dentro hay 3 documentos creados con id automático y dentro de cada uno de ellos están los campos: artista, género, portada y título como strings con su información correcpondiente a cada tarjeta.

Aparece en HomeView.vue, en la web correcponde a la sección de Inicio.