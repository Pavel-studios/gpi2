import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function sourceEntry() {
  return {
    name: 'source-entry',
    transformIndexHtml: {
      order: 'pre',
      handler(html: string) {
        return html
        .replace(
          /<script type="module" crossorigin src="\/gpi2\/assets\/index-[^"]+\.js"><\/script>/,
          '<script type="module" src="/src/main.tsx"></script>',
        )
        .replace(
          /\s*<link rel="stylesheet" crossorigin href="\/gpi2\/assets\/index-[^"]+\.css">/,
          '',
        );
      },
    },
  }
}

export default defineConfig({
  base: '/gpi2',
  plugins: [
    figmaAssetResolver(),
    sourceEntry(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
