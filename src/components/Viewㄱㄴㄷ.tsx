import { useTheme } from '@emotion/react'
import type { PropsWithChildren } from 'react'
import View from './View'
import Boxㄱㄴㄷ from './Boxㄱㄴㄷ'
import styled from '@emotion/styled'

const Bogi = styled.span`
  letter-spacing: 1em;
`

const Viewㄱㄴㄷ = ({ children }: PropsWithChildren) => {
  const { language } = useTheme()
  return (
    <View>
      <legend>
        {language === 'ja' ? (
          '<例>'
        ) : (
          <>
            &lt;<Bogi>보</Bogi>기&gt;
          </>
        )}
      </legend>
      <Boxㄱㄴㄷ>{children}</Boxㄱㄴㄷ>
    </View>
  )
}

export default Viewㄱㄴㄷ
