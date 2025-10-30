import { O_GLYPHS_JA, O_GLYPHS_KO } from '@/utils/O'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import type { PropsWithChildren } from 'react'
import Index from './Index'

interface Props {
  index: number
}

const OWrapper = styled(Index)`
  margin-right: ${({ theme }) => (theme.language === 'ko' ? '0.2em' : '0')};
  vertical-align: ${({ theme }) =>
    theme.language === 'ko' ? 'baseline' : '-0.5em'};
  line-height: 1;
`

const UWrapper = styled.span`
  text-decoration: underline;
  text-underline-offset: 0.2em;
`

const Ou = ({ index, children }: PropsWithChildren<Props>) => {
  const { language: lang } = useTheme()
  return (
    <span>
      <OWrapper>
        {lang === 'ko' ? O_GLYPHS_KO[index - 1] : O_GLYPHS_JA[index - 1]}
      </OWrapper>
      <UWrapper>{children}</UWrapper>
    </span>
  )
}

export default Ou
