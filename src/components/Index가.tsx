import { useTheme } from '@emotion/react'
import Index from './Index'

interface Props {
  index: number
}

const KOREAN_INDEXES =
  '(가),(나),(다),(라),(마),(바),(사),(아),(자),(차),(카),(타),(파),(하)'.split(
    ',',
  )
const JAPANESE_INDEXES = '(Ⅰ),(Ⅱ),(Ⅲ),(Ⅳ),(Ⅴ),(Ⅵ),(Ⅶ),(Ⅷ),(Ⅸ),(Ⅹ)'.split(',')

const Index가 = ({ index }: Props) => {
  const { language: lang } = useTheme()
  return (
    <Index>
      {lang === 'ja' ? JAPANESE_INDEXES[index - 1] : KOREAN_INDEXES[index - 1]}
    </Index>
  )
}

export default Index가
