import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/

const manifestForPlugin = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.png"],
  manifest:{
    name:"Recipe Transfer",
    short_name:"Recipe Transfer",
    description:"Machine to Machine Recipe transfer  ",
    icons:[{
      src: './icon-192x192.png',
      sizes:'192x192',
      type:'image/png',
    },
    {
      src:'./icon-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: './apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: './masked-icon.png',
      sizes:'48x48',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#181818',
  background_color:'#e0cc3b',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  },
};



export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});