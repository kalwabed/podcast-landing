import { defineConfig, presetUno, presetIcons, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/'
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Poppins'
      }
    })
  ]
}) 
