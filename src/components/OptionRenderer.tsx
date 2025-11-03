import styled from '@emotion/styled'
import type { PropsWithChildren } from 'react'

const OptionItem = styled.span`
  display: block;
  text-indent: -1em;
  padding-left: 1em;
`

interface Props {
  index: number
}

const CIRCLE_NUMBERS = '①②③④⑤⑥⑦⑧⑨⑩'.split('')

const OptionRenderer = ({ index, children }: PropsWithChildren<Props>) => {
  return (
    <OptionItem>
      {CIRCLE_NUMBERS[index]} {children}
    </OptionItem>
  )
}

export default OptionRenderer
