// vite.config.js
import { defineConfig } from "file:///E:/modbustcp/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///E:/modbustcp/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///E:/modbustcp/node_modules/vite-plugin-pwa/dist/index.js";
var manifestForPlugin = {
  registerType: "prompt",
  includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.png"],
  manifest: {
    name: "Recipe Transfer",
    short_name: "Recipe Transfer",
    description: "Machine to Machine Recipe transfer  ",
    icons: [
      {
        src: "./icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "./icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon"
      },
      {
        src: "./apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon"
      },
      {
        src: "./masked-icon.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    theme_color: "#181818",
    background_color: "#e0cc3b",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  }
};
var vite_config_default = defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxtb2RidXN0Y3BcXFxcZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXG1vZGJ1c3RjcFxcXFxmcm9udGVuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovbW9kYnVzdGNwL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cblxuY29uc3QgbWFuaWZlc3RGb3JQbHVnaW4gPSB7XG4gIHJlZ2lzdGVyVHlwZToncHJvbXB0JyxcbiAgaW5jbHVkZUFzc2VzdHM6WydmYXZpY29uLmljbycsIFwiYXBwbGUtdG91Yy1pY29uLnBuZ1wiLCBcIm1hc2tlZC1pY29uLnBuZ1wiXSxcbiAgbWFuaWZlc3Q6e1xuICAgIG5hbWU6XCJSZWNpcGUgVHJhbnNmZXJcIixcbiAgICBzaG9ydF9uYW1lOlwiUmVjaXBlIFRyYW5zZmVyXCIsXG4gICAgZGVzY3JpcHRpb246XCJNYWNoaW5lIHRvIE1hY2hpbmUgUmVjaXBlIHRyYW5zZmVyICBcIixcbiAgICBpY29uczpbe1xuICAgICAgc3JjOiAnLi9pY29uLTE5MngxOTIucG5nJyxcbiAgICAgIHNpemVzOicxOTJ4MTkyJyxcbiAgICAgIHR5cGU6J2ltYWdlL3BuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6Jy4vaWNvbi01MTJ4NTEyLnBuZycsXG4gICAgICBzaXplczonNTEyeDUxMicsXG4gICAgICB0eXBlOidpbWFnZS9wbmcnLFxuICAgICAgcHVycG9zZTonZmF2aWNvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogJy4vYXBwbGUtdG91Y2gtaWNvbi5wbmcnLFxuICAgICAgc2l6ZXM6JzE4MHgxODAnLFxuICAgICAgdHlwZTonaW1hZ2UvcG5nJyxcbiAgICAgIHB1cnBvc2U6J2FwcGxlIHRvdWNoIGljb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiAnLi9tYXNrZWQtaWNvbi5wbmcnLFxuICAgICAgc2l6ZXM6JzQ4eDQ4JyxcbiAgICAgIHR5cGU6J2ltYWdlL3BuZycsXG4gICAgICBwdXJwb3NlOidhbnkgbWFza2FibGUnLFxuICAgIH1cbiAgXSxcbiAgdGhlbWVfY29sb3I6JyMxODE4MTgnLFxuICBiYWNrZ3JvdW5kX2NvbG9yOicjZTBjYzNiJyxcbiAgZGlzcGxheTpcInN0YW5kYWxvbmVcIixcbiAgc2NvcGU6Jy8nLFxuICBzdGFydF91cmw6XCIvXCIsXG4gIG9yaWVudGF0aW9uOidwb3J0cmFpdCdcbiAgfSxcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgVml0ZVBXQShtYW5pZmVzdEZvclBsdWdpbildLFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UCxTQUFTLG9CQUFvQjtBQUNwUixPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBR3hCLElBQU0sb0JBQW9CO0FBQUEsRUFDeEIsY0FBYTtBQUFBLEVBQ2IsZ0JBQWUsQ0FBQyxlQUFlLHVCQUF1QixpQkFBaUI7QUFBQSxFQUN2RSxVQUFTO0FBQUEsSUFDUCxNQUFLO0FBQUEsSUFDTCxZQUFXO0FBQUEsSUFDWCxhQUFZO0FBQUEsSUFDWixPQUFNO0FBQUEsTUFBQztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsT0FBTTtBQUFBLFFBQ04sTUFBSztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFJO0FBQUEsUUFDSixPQUFNO0FBQUEsUUFDTixNQUFLO0FBQUEsUUFDTCxTQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU07QUFBQSxRQUNOLE1BQUs7QUFBQSxRQUNMLFNBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTTtBQUFBLFFBQ04sTUFBSztBQUFBLFFBQ0wsU0FBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFZO0FBQUEsSUFDWixrQkFBaUI7QUFBQSxJQUNqQixTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsRUFDWjtBQUNGO0FBSUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLGlCQUFpQixDQUFDO0FBQy9DLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
