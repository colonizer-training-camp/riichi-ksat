import { SANS_JAPANESE, SERIF_KOREAN } from '@/styles/fonts'
import styled from '@emotion/styled'

const Box가나다 = styled.ol`
  border: 1px solid;
  padding: 1em;
  padding-left: ${({ theme }) => (theme.language === 'ja' ? '3.5em' : '3em')};
  margin: 1em 0;
  & > li {
    list-style-type: ${({ theme }) =>
      theme.language === 'ja' ? 'i_ii_iii' : 'ga_na_da'};
  }
  & > li::marker {
    font-family: ${({ theme }) =>
      theme.language === 'ja' ? SANS_JAPANESE : SERIF_KOREAN};
    font-weight: ${({ theme }) =>
      theme.language === 'ja' ? 'bold' : 'inherit'};
  }
`

export default Box가나다
