import { SANS_JAPANESE, SERIF_KOREAN } from '@/styles/fonts'
import styled from '@emotion/styled'

const Boxㄱㄴㄷ = styled.ol`
  padding-left: 2em;
  & > li {
    list-style-type: ${({ theme }) =>
      theme.language === 'ja' ? 'a_i_u' : 'g_n_d'};
  }
  & > li::marker {
    font-family: ${({ theme }) =>
      theme.language === 'ja' ? SANS_JAPANESE : SERIF_KOREAN};
    font-weight: ${({ theme }) =>
      theme.language === 'ja' ? 'bold' : 'inherit'};
  }
`

export default Boxㄱㄴㄷ
