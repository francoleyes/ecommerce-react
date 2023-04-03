import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default {
  build: {
    rollupOptions: {
      external: ['/node_modules/firebase/index.js', '/node_modules/firebase/firestore/index.js']
    }
  }
}

