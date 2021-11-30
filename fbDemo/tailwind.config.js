module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: { // 寫在 extends 裡
      spacing: {
        'main-span': '72px',
      },
      translate: ['checked'],
      colors: {
        'fb-bg': '#18191a',
        'fb-header': '#242526',
        'fb-input': '#3a3b3c',
        'fb-popover': '#3e4042',
        'fb-active': '#323436',
        'fb-card': '#242526',
        'fb': '#2e89ff',
        'fb-dark-hover': 'bg-gray-100',
        'moon': '#191970',
        
      },
      screens:{
        desktop: '1500px',
        mobile: '400px',
        ipad: '1140px',
        small: '375px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
