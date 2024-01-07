import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from 'react-icons/si'
import { GrGraphQl } from "react-icons/gr";
const projectsDb = [
    {
        id: 1,
        project_name: 'youtube',
        project_description: 'youtube clone react.js frameworkida yozilgan.',
        url: 'https://youtube.com',
        language_icon:FaReact,
        language:'react',
        image_link: 'https://w0.peakpx.com/wallpaper/775/909/HD-wallpaper-youtube-logo-grunge-black-background-youtube-logo.jpg'
    },
    {
        id: 2,
        project_name: 'twitter',
        project_description: 'twitter clone react.js frameworkida yozilgan.',
        url: 'https://velvety-tartufo-279992.netlify.app',
        language_icon:FaReact,
        language:'react',
        image_link: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example placeholder image URL
    },
    {
        id: 3,
        project_name: 'microsoft todo',
        project_description: 'microsoft to-do clone react.jsda yozilgan.',
        url: 'https://silly-horse-0e2392.netlify.app',
        language_icon:FaReact,
        language:'react',
        image_link: 'https://primaryedutech.com/wp-content/uploads/2018/01/microsoft-To-Do.png', // Example placeholder image URL
    },
    {
        id: 4,
        project_name: 'countries',
        project_description: 'davlatlar haqida html,css,jsda yozilgan.',
        url: 'https://zesty-flan-3e2490.netlify.app/',
        language_icon:FaHtml5,
        language:'html',
        image_link: 'https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 5,
        project_name: 'Najot Talim',
        project_description: 'najot talim clone html,css,jsda yozilgan.',
        url: 'https://lustrous-melomakarona-08c676.netlify.app/',
        language_icon:FaHtml5,
        language:'html',
        image_link: 'https://images.unsplash.com/photo-1633545505446-586bf83717f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 6,
        project_name: 'microsoft backend',
        project_description: 'microsoft todo backend expressda yozilgan.',
        url: 'https://github.com/sherzod-uralov/server',
        language_icon:SiExpress,
        language:'express',
        image_link: 'https://images.unsplash.com/photo-1543953589-18ab987d605f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 7,
        project_name: 'scoot site',
        project_description: 'full scoot site html,css,jsda yozilgan.',
        url: 'https://famous-dusk-ad6bf3.netlify.app/location%20page/loacation.html',
        language_icon:FaHtml5,
        language:'html',
        image_link: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 8,
        project_name: 'weather app',
        project_description: 'weather app html,css,jsda yozilgan.',
        url: 'https://weather-shapp.netlify.app/',
        language_icon:FaHtml5,
        language:'html',
        image_link: 'https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 9,
        project_name: 'memory game',
        project_description: 'memory game html,css,jsda yozilgan.',
        url: 'https://legendary-snickerdoodle-a98cb6.netlify.app/',
        language_icon:FaHtml5,
        language:'html',
        image_link: 'https://images.unsplash.com/photo-1611546191222-96fb7afd5af9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVtb3J5JTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 10,
        project_name: 'Todo app',
        project_description: 'todo app localstorage html,css,jsda yozilgan.',
        url: 'https://ubiquitous-chebakia-df5c25.netlify.app/',
        language_icon:FaHtml5,
        language:'html',
        image_link: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 11,
        project_name: 'telegram backend',
        project_description: 'telegram backend express jsda yozilgan.',
        url: 'https://github.com/sherzod-uralov/telegram-backend',
        language_icon:SiExpress,
        language:'express',
        image_link: 'https://images.unsplash.com/photo-1636743094110-5e153f93ad7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 12,
        project_name: 'insula media',
        project_description: 'insula media html,sassda jsda yozilgan.',
        url: 'https://effervescent-pony-7a1432.netlify.app/',
        language_icon:FaHtml5,
        language:'html',
        image_link: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 13,
        project_name: 'chevrolet backend',
        project_description: 'chevrolet uz backend graphqlda yozilgan.',
        url: 'https://github.com/sherzod-uralov/chevrolet.uz-backend',
        language_icon:GrGraphQl,
        language:'graphql',
        image_link: 'https://images.unsplash.com/photo-1499147231799-a36bdf1ee3dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 14,
        project_name: 'ecommerce backend',
        project_description: 'online shop backend expressda yozilgan.',
        url: 'https://github.com/sherzod-uralov/chevrolet.uz-backend',
        language_icon:SiExpress,
        language:'express',
        image_link: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

];
export default  projectsDb