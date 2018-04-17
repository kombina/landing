import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  bodyFontFamily: ['Montserrat', 'Georgia', 'serif'],
  headerFontFamily: ['Montserrat', 'Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
