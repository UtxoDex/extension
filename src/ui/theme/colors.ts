// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  white: '#ffffff',
  white_muted: 'rgba(255, 255, 255, 0.5)',
  black: '#e2e8f0',
  black_muted: 'rgba(0, 0, 0, 0.5)',
  black_muted2: 'rgba(0, 0, 0, 0.)',

  dark: '#1E283C',
  grey: '#495361',
  light: '#A2A4AA',

  black_dark: '#020617',

  green_dark: '#379a29',
  green: '#41B530',
  green_light: '#5ec04f',

  yellow_dark: '#15803d',
  yellow: 'rgb(16 185 129)',
  yellow_light: '#34d399',

  red_dark: '#c92b40',
  red: '#ED334B',
  red_light: '#f05266',

  blue_dark: '#1461d1',
  blue: '#1872F6',
  blue_light: '#c6dcfd',

  orange_dark: '#022c22',
  orange: '#064e3b',
  orange_light: '#047857',

  gold: '#22c55e'
};

export const colors = Object.assign({}, palette, {
  transparent: 'rgba(0, 0, 0, 0)',

  text: palette.white,

  textDim: palette.white_muted,

  background: '#D8E0EF',

  error: '#e52937',

  danger: palette.red,

  card: '#020617',
  warning: palette.orange,
  primary: palette.yellow,

  bg2: '#020617',
  bg3: '#434242',
  bg4: '#334155',

  border: 'rgba(255,255,255,0.1)'
});

export type ColorTypes = keyof typeof colors;
