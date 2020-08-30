import { TYPOGRAPHY } from '@/constants'

export default {
  htmlFontSize: 16,
  fontSize: 14,
  button: {
    textTransform: 'none',
  },
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_900,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_700,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_500,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_300,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_200,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_100,
    fontWeight: 'bold',
  },
  subtitle1: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_200,
    fontWeight: 'bold',
  },
  subtitle2: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_100,
    fontWeight: 'bold',
  },
  body1: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_200,
  },
  body2: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_100,
  },
  caption: {
    fontSize: TYPOGRAPHY.DESKTOP_FONT_SIZE_75,
    fontWeight: 'bold',
  },
}
