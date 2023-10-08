import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
base: "/fem-designo/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        locations: resolve(__dirname, 'locations.html'),
        about: resolve(__dirname, 'about.html'),
        appDesign: resolve(__dirname, 'app-design.html'),
        contact: resolve(__dirname, 'contact.html'),
        graphicDesign: resolve(__dirname, 'graphic-design.html'),
        webDesign: resolve(__dirname, 'web-design.html'),
      },
    },
  },
})