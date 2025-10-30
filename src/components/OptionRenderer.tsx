import type { PropsWithChildren } from 'react'

interface Props {
  index: number
}

const CIRCLE_NUMBERS = '①②③④⑤⑥⑦⑧⑨⑩'.split('')

const OptionRenderer = ({ index, children }: PropsWithChildren<Props>) => {
  return (
    <span>
      {CIRCLE_NUMBERS[index]} {children}
    </span>
  )
}

export default OptionRenderer
