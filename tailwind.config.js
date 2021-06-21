module.exports = {
  presets: [require('./aem-blueprint/tailwind.config')],
  theme: {
    extend: {
      colors: {
        light: {
          primary: {
            fillAccent: "rgb(235, 235, 235)",
            fillAccentHover: "rgb(255, 255, 255)",
          }
        }
      }
    },
  },
  variants: {},
  plugins: [],
  purge: [
    './src/styles/index.json',
    './src/template/policies.json',
    './src/components/**/**/*.js',
    './src/components/**/*.html',
    './src/site/js/*.js',
    './src/main.css'
  ],
};
