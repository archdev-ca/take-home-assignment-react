/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,tsx,jsx}'],
    theme: {
        extend: {
            borderRadius: {
                large: '10px',
            },
            colors: {
                primary: {
                    main: '#9A48D6',
                    dark: '#803bb3',
                    darker: '#662f8f',
                    light: '#a85fde',
                    lighter: '#c296e3',
                    contrast: '#fff',
                },
            },
        },
    },
    plugins: [],
}
