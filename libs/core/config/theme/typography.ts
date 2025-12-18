export const typography = {
  fontFamily: {
    thin: 'Inter_100Thin',
    extraLight: 'Inter_200ExtraLight',
    light: 'Inter_300Light',
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semiBold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
    extraBold: 'Inter_800ExtraBold',
    black: 'Inter_900Black',

    thinItalic: 'Inter_100Thin_Italic',
    extraLightItalic: 'Inter_200ExtraLight_Italic',
    lightItalic: 'Inter_300Light_Italic',
    regularItalic: 'Inter_400Regular_Italic',
    mediumItalic: 'Inter_500Medium_Italic',
    semiBoldItalic: 'Inter_600SemiBold_Italic',
    boldItalic: 'Inter_700Bold_Italic',
    extraBoldItalic: 'Inter_800ExtraBold_Italic',
    blackItalic: 'Inter_900Black_Italic',
  } as const,

  fontSize: {
    heading1: 32,
    heading2: 28,
    heading3: 24,
    heading4: 20,
    bodyLarge: 18,
    body: 16,
    bodySmall: 14,
    caption: 12,
  } as const,

  lineHeight: {
    heading: 1.3,
    body: 1.5,
  } as const,
}
