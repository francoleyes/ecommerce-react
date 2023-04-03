// rollup.config.js
export default {
    input: 'src/main.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs'
    },
    external: ['firebase/app'] // Agrega 'firebase/app' a la opción 'external'
  };