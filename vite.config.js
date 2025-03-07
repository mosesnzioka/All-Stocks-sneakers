import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  plugins: [
    tailwindcss(),
  ],
});