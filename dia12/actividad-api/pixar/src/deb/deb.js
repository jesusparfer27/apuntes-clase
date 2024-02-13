import { v4 as uuidv4 } from 'uuid';

export const pixar = {
    header: {
        h1: {
            src: "logo.png",
            href: "/",
            title: "Disney Pixar"
        },
        nav: [
            {
                id: uuidv4(),
                href: "/feature-films-launch.html",
                text: "Featured Films"
            },
            {
                id: uuidv4(),
                href: "/feature-films.html",
                text: "Short Films",
                submenu: [
                    {id: uuidv4(), text: "item1", href:"#"},
                    {id: uuidv4(), text: "item2", href:"#"},
                    {id: uuidv4(), text: "item3", href:"#"},
                ]
            },
            {
                id: uuidv4(),
                href: "/technology.html",
                text: "Technology",
                submenu: [
                    {id: uuidv4(), text: "item1", href:"#"},
                    {id: uuidv4(), text: "item2", href:"#"},
                    {id: uuidv4(), text: "item3", href:"#"},
                ]
            },

        ]
    },
    
    hero: {
        href: 'https://www.youtube.com/watch?v=VWavstJydZU',
        alt: 'imagen fondo',
        src: 'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1699472929056-R6KDN8SAAXSJBT45V866/io2bg.jpg?format=2500w',
        imglogo: ''

        }
}