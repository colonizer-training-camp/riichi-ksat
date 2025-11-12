import styled from '@emotion/styled'
import { IconCheck } from '@tabler/icons-react'
import type { PropsWithChildren } from 'react'

interface OptionItemProps {
  active: boolean
}

const OptionItem = styled.span<OptionItemProps>`
  display: block;
  text-indent: -1em;
  padding-left: 1em;
  user-select: none;
  cursor: pointer;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  text-underline-offset: 0.4em;
  text-decoration-thickness: 0.15em;
  &:hover {
    text-decoration: ${({ active }) =>
      active ? 'underline' : 'dashed underline'};
    text-underline-offset: ${({ active }) => (active ? '0.4em' : '0.4em')};
    text-decoration-thickness: ${({ active }) => (active ? '0.15em' : '0.1em')};
  }
`

const OptionCircle = styled.span`
  display: inline;
  position: relative;
  width: 1em;
`

const OptionCheck = styled.span`
  position: absolute;
  top: -0.5em;
  left: 0.3em;
  color: red;
  font-size: 2em;
`

interface Props {
  index: number
  active: boolean
  onClick: () => void
}

const CIRCLE_NUMBERS = '①②③④⑤⑥⑦⑧⑨⑩'.split('')

const OptionRenderer = ({
  index,
  children,
  active,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <OptionItem onClick={onClick} active={active} tabIndex={0}>
      <OptionCircle>
        {CIRCLE_NUMBERS[index]}
        {active && (
          <OptionCheck>
            <IconCheck size="1em" strokeWidth={1.5} color="red" />
          </OptionCheck>
        )}
      </OptionCircle>{' '}
      {children}
    </OptionItem>
  )
}

export default OptionRenderer
