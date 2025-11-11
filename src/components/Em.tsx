import { SANS_JAPANESE, SERIF_KOREAN } from '@/styles/fonts'
import styled from '@emotion/styled'

export const Em = styled.em`
  font-family: ${({ theme }) =>
    theme.language === 'ja' ? SANS_JAPANESE : SERIF_KOREAN};
  font-weight: ${({ theme }) => (theme.language === 'ja' ? 'bold' : 'inherit')};
  text-decoration: ${({ theme }) =>
    theme.language === 'ko' ? 'underline' : 'inherit'};
  text-underline-offset: 0.2em;
`
