import type { ReactNode } from 'react'

type _5Tuple<T> = [undefined, T, T, T, T, T]

export interface Problem {
  index: number
  score: 2 | 3
  content: {
    ko: ReactNode
    ja: ReactNode
  }
  options: _5Tuple<
    | {
        ko: ReactNode
        ja: ReactNode
      }
    | ReactNode
  >
  optionPerRow: 1 | 2 | 3 | 5
  answer: 1 | 2 | 3 | 4 | 5
}
