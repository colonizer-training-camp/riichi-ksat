import { Fragment, type PropsWithChildren } from 'react'
import Indexㄱ from './Indexㄱ'
import Index가 from './Index가'
import O from './O'
import Ou from './Ou'
import { useTheme } from '@emotion/react'

interface JoinProps {
  items: React.ReactNode[]
}

const Join = ({ items }: JoinProps) => {
  const { language } = useTheme()
  return (
    <>
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && (language === 'ko' ? ', ' : '、')}
          {item}
        </Fragment>
      ))}
    </>
  )
}

export const 가 = <Index가 index={1} />
export const 나 = <Index가 index={2} />
export const 다 = <Index가 index={3} />
export const 라 = <Index가 index={4} />
export const 마 = <Index가 index={5} />

export const ㄱ = <Indexㄱ index={1} />
export const ㄴ = <Indexㄱ index={2} />
export const ㄷ = <Indexㄱ index={3} />
export const ㄱㄴ = <Join items={[ㄱ, ㄴ]} />
export const ㄱㄷ = <Join items={[ㄱ, ㄷ]} />
export const ㄴㄷ = <Join items={[ㄴ, ㄷ]} />
export const ㄱㄴㄷ = <Join items={[ㄱ, ㄴ, ㄷ]} />

export const GG = ({ children }: PropsWithChildren) =>
  children ? <Ou index={1}>{children}</Ou> : <O index={1} />
export const NN = ({ children }: PropsWithChildren) =>
  children ? <Ou index={2}>{children}</Ou> : <O index={2} />
export const DD = ({ children }: PropsWithChildren) =>
  children ? <Ou index={3}>{children}</Ou> : <O index={3} />
export const RR = ({ children }: PropsWithChildren) =>
  children ? <Ou index={4}>{children}</Ou> : <O index={4} />
export const MM = ({ children }: PropsWithChildren) =>
  children ? <Ou index={5}>{children}</Ou> : <O index={5} />
