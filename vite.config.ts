import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig(
    {  
        base:'/chat-app-css-illustration/',
        plugins: [ 
               tailwindcss(),
              ],
    })