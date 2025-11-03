import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const ProblemScoreFloat = styled.span`
  display: inline-block;
  float: right;
`

const Clearfix = styled.span`
  display: block;
  clear: both;
`

interface Props {
  score: number
}

const ProblemScore = ({ score }: Props) => {
  const { language } = useTheme()
  return (
    <>
      <ProblemScoreFloat>
        [{score}
        {language === 'ja' ? '点' : '점'}]
      </ProblemScoreFloat>
      <Clearfix />
    </>
  )
}

export default ProblemScore
