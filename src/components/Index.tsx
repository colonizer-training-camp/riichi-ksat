import { SANS_JAPANESE, SERIF_KOREAN } from '@/styles/fonts'
import styled from '@emotion/styled'

const Index = styled.span`
  font-family: ${({ theme }) =>
    theme.language === 'ja' ? SANS_JAPANESE : SERIF_KOREAN};
  font-weight: ${({ theme }) => (theme.language === 'ja' ? 'bold' : 'inherit')};
`

export default Index
