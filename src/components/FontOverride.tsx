import { SERIF_JAPANESE, SERIF_KOREAN } from '@/styles/fonts'
import styled from '@emotion/styled'

export const FontOverride = styled.div`
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? SERIF_JAPANESE : SERIF_KOREAN).join(', ')};
  text-align: justify;
  font-feature-settings: ${({ theme }) =>
    theme.language === 'ja' ? '"palt", "jp04", "jp83"' : 'inherit'};
`
