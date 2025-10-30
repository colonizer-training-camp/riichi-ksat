import { useTheme } from '@emotion/react'
import Index from './Index'

interface Props {
  index: number
}

const KOREAN_INDEXES = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ'.split('')
const JAPANESE_INDEXES =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('')

const Indexㄱ = ({ index }: Props) => {
  const { language: lang } = useTheme()
  return (
    <Index>
      {lang === 'ja' ? JAPANESE_INDEXES[index - 1] : KOREAN_INDEXES[index - 1]}
    </Index>
  )
}

export default Indexㄱ
