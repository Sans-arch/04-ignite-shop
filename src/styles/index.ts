import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
 } = createStitches({
    theme: {
        colors: {
            white: '#FFFFFF',
            gray900: '#121214',
            gray800: '#202024',
            gray300: '#C4C4CC',
            gray100: '#E1E1E6',

            green500: '#00875f',
            green300: '#00b37e'
        }
    }
})
