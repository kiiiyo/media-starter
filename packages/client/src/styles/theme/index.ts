import { createMuiTheme } from '@material-ui/core/styles'

import breakpointsOption from './breakpoints'
import paletteOption from './palette'
import typographyOption from './typography'
import shadowsOption from './shadows'

export const theme = createMuiTheme({
  breakpoints: Object.assign(breakpointsOption),
  typography: Object.assign(typographyOption),
  palette: Object.assign(paletteOption),
  shadows: Object.assign(shadowsOption),
})
