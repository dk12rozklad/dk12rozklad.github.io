import { defineConfig } from 'vite'


export default {
    themeConfig: {
        logo: "/images/logo.jpg",
        nav: [
            { text: "Дедлайни", link: "/deadlines" },
            { text: "Список групи", link: "/list" },
        ],
    },
    lang: "UK",
    title: "Наш розклад",
    titleTemplate: " Розклад by RenatTOP",
    description: "Розклад by RenatTOP",
    appearance: "dark",
    outDir: ".vitepress/dist",
    cleanUrls: true,

}