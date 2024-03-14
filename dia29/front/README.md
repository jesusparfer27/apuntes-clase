# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Backend de Libros

Este backend en `express` utiliza la base de datos de `MySQL` y el conector `mysql2`.

# Utilizar alias @ en vez de ../../../components

editar vite.config.js para agregar el alias

```js

ç// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


// alias para los imports
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
}
})


