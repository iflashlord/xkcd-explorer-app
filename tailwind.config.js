module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        opacity: ({ after }) => after(['disabled']),
        extend: {
            backgroundColor: [
                'odd',
                'even',
            ],
            pointerEvents: ['hover', 'focus', 'disabled'],
            outline: ['hover', 'active'],
            display: ['hover', 'focus', 'disabled'],
        },
    },
    plugins: [],
}