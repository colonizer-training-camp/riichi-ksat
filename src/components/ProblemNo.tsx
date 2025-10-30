import { SANS_JAPANESE } from '@/styles/fonts'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const ProblemNoKorean = styled.h2`
  display: inline;
  font-size: 1.2em;
  font-weight: bold;
`

const ProblemNoJapanese = styled.h2`
  display: inline;
  font-family: ${SANS_JAPANESE.join(', ')};
  font-weight: bold;
`

interface Props {
  index: number
}

const ProblemNo = ({ index }: Props) => {
  const { language: lang } = useTheme()
  if (lang === 'ko') {
    return <ProblemNoKorean>{index}. </ProblemNoKorean>
  }
  return <ProblemNoJapanese>問 {index} </ProblemNoJapanese>
}

export default ProblemNo
