/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rocket-blog-purple': '#290742',
        'rocket-blog-dark': '#170027',
        'rocket-blog-button': '#9e6dc2',
        'rocket-blog-white': '#fff',
        'rocket-blog-light-purple': '#fbf6ff',
        'rocket-blog-green': '#4fff4b'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans'],
      serif: ['Poppins', 'serif'],
      mono: ['Roboto', 'mono']
    }
  },
  plugins: []
}
