/*
  Auto convert to HSLA for easy hover settings?
  https://css-tricks.com/converting-color-spaces-in-javascript/
*/
module.exports = {
  // Do we want static colors at all?
  static: {
    white: '#ffffff',
    black: '#000000',
  },
  brand: {

  },
  semantic: {
    informative: {},
    negative: {},
    notice: {},
    positive: {},
  },
  'light': {
    ':root': {
      'text': 'rgb(40,49,67)',
      'text-hover': 'rgb(21,26,35)',
      'text-muted': 'rgb(121, 164, 224)',
      'text-accent': 'rgb(225,225,225)',
      'text-accent-hover': 'rgb(246,248,244)',
      'fill': 'rgb(255,255,255)',
      'fill-hover': 'rgb(236,238,244)',
      'fill-muted': 'rgb(121, 164, 224)',
      'fill-accent': 'rgb(66,137,236)',
      'fill-accent-hover': 'rgb(62,119,200)',
    },
    'brand': { // Brand Colors are available within the UI for configuration
      'primary': {
        'fill': '',
        'fill-hover': '',
        'fill-accent': '',
        'fill-accent-hover': '',
        'text': '',
        'text-hover': '',
        'text-accent': '',
        'text-accent-hover': '',
      },
      'secondary': {
        'fill': '',
        'fill-hover': '',
        'fill-accent': '',
        'fill-accent-hover': '',
        'text': '',
        'text-hover': '',
        'text-accent': '',
        'text-accent-hover': '',
      },
      'muted': {
        'fill': '',
        'fill-hover': '',
        'fill-accent': '',
        'fill-accent-hover': '',
        'text': '',
        'text-hover': '',
        'text-accent': '',
        'text-accent-hover': '',
      },
      'light': { // Or is this just the root values?
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      }, 
      'dark': { // Or is this just the root values?
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
    },
    // UI Colors are used in within the UI but cannot be selected by the authors
    // UI Colors can be used within the UI and might be mixed with Brand Colors, so they should be neutral and usable
    'ui': { 
      'danger': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'dark': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'info': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'light': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'success': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'warning': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
    }
  },
  'dark': {
    ':root': {
      'text': 'rgb(225,225,225)',
      'text-hover': 'rgb(246,248,244)',
      'text-muted': 'rgb(121, 164, 224)',
      'text-accent': 'rgb(225,225,225)',
      'text-accent-hover': 'rgb(246,248,244)',
      'fill': 'rgb(10,19,37)',
      'fill-hover': 'rgb(8,15,31)',
      'fill-muted': 'rgb(121, 164, 224)',
      'fill-accent': 'rgb(66,137,236)',
      'fill-accent-hover': 'rgb(62,119,200)',
    },
  },
  'primary': {
    'text': 'rgb(225,225,225)',
    'text-hover': 'rgb(246,248,244)',
    'fill': 'rgb(66, 137, 236)',
    'fill-hover': 'rgb(62, 119, 200)',
  },
  'secondary': {
    'text': 'rgb(194, 202, 219)',
    'text-hover': 'rgb(210, 216, 228)',
    'fill': 'rgb(40, 49, 67)',
    'fill-hover': 'rgb(29, 37, 50)',
  }
}