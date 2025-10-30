import { O_GLYPHS_JA, O_GLYPHS_KO } from '@/utils/O'
import { useTheme } from '@emotion/react'
import Index from './Index'

interface Props {
  index: number
}

const O = ({ index }: Props) => {
  const { language: lang } = useTheme()
  return (
    <Index>
      {lang === 'ko' ? O_GLYPHS_KO[index - 1] : O_GLYPHS_JA[index - 1]}
    </Index>
  )
}

export default O
