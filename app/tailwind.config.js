/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,tsx,jsx}'],
    safelist: [
        {
            pattern: /basis-/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl'],
        },
    ],
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
                    lighter: '#c9a8e3',
                    contrast: '#fff',
                    disabled: '#c9a8e3',
                },
                black: {
                    light: '#555',
                    muted: '#858484',
                },
            },
            boxShadow: {
                card: '0 0 6px 0 rgba(0,0,0, .20)',
                border: 'inset 0 0 0 1px #ccc;',
            },
        },
    },
    plugins: [],
}
