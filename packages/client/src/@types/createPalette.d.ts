import * as createPalette from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    default?: ColorOptions
    brand?: ColorOptions
    informative?: ColorOptions
    negative?: ColorOptions
    notice?: ColorOptions
    positive?: ColorOptions
  }
  interface Palette {
    default: Color
    brand: Color
    informative: Color
    negative: Color
    notice: Color
    positive: Color
  }
}
