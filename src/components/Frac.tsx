import styled from '@emotion/styled'
import type { ReactNode } from 'react'

const FracContainer = styled.span`
  display: inline-flex;
  font-size: 90%;
  vertical-align: 0.6em;
  text-align: center;
  flex-direction: column;
  line-height: 1em;
  gap: 0.1em;
`

const Numerator = styled.span`
  display: block;
  padding: 0 0.2em;
`

const Denominator = styled.span`
  display: block;
  padding: 0 0.2em;
`

const Line = styled.span`
  display: block;
  border-top: 1px solid;
  margin: 0.1em 0;
`

interface Props {
  p: ReactNode
  q: ReactNode
}

export const Frac = ({ p, q }: Props) => {
  return (
    <FracContainer>
      <Numerator>{p}</Numerator>
      <Line />
      <Denominator>{q}</Denominator>
    </FracContainer>
  )
}
