module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
          ...theme('colors'),
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'bgprimary': '#ff7a59',
          'bgsecondary': '#31C6AE',
          'danger': '#e3342f',
        }),

        color: { 
            'colorprimary': '#ff7a59',
            "colorsecondary": '#170f45'
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}