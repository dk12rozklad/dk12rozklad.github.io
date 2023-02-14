import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'


export default {
    plugins: [
        VitePWA({
            registerType: 'autoUpdate', devOptions: {
                enabled: true
            }, includeAssets: ['favicon.ico'],
            manifest: {
                name: 'Наш розклад',
                short_name: 'Розклад',
                description: 'Наш розклад by RenatTOP',
                theme_color: '#000000',
            }, workbox: {
                sourcemap: true
            }
        })
    ],
    themeConfig: {
        logo: "/images/logo.jpg",
    },
    lang: "UK",
    title: "Наш розклад",
    titleTemplate: " Розклад by RenatTOP",
    description: "Розклад by RenatTOP",
    appearance: "dark",
    outDir: ".vitepress/dist",
    cleanUrls: true,

}