module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    sm:'640px',
    // => @medida (min width 640 px)
    md:'768px',
    // => @medida (min width 768 px)
    lg:'1024px',
    // => @medida (min width 1024 px)
    xl:'1280px',
    // => @medida (min width 1280 px)
    '2xl':'1536px',
    // => @medida (min width 1536 px)
    extend: {},
  },
  plugins: [],
}
