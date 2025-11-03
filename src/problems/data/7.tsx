import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { GG, NN, ㄱ, ㄱㄴㄷ, ㄴ, ㄷ } from '@/components/macros'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 7,
  score: 2,
  content: {
    ko: (
      <>
        <p>그림은 마작에서 사용하는 패를 나타낸 것이다.</p>
        <p>
          이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?
        </p>
        <Viewㄱㄴㄷ>
          <li>
            <GG />
            에는 <NN />과 달리 아무것도 쓰여 있지 않아 원하는 패로 사용할 수
            있다.
          </li>
          <li>
            <GG />이 도라 표시패에 있으면 <NN />이 도라가 된다.
          </li>
          <li>
            <GG /> 혹은 <NN />을 사용하여 자 400/친 700의 점수를 가지는 쯔모로
            화료할 수 있다.
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>그림은 마작에서 사용하는 패를 나타낸 것이다.</p>
        <p>
          이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?
        </p>
        <Viewㄱㄴㄷ>
          <li>
            <GG />
            에는 <NN />과 달리 아무것도 쓰여 있지 않아 원하는 패로 사용할 수
            있다.
          </li>
          <li>
            <GG />이 도라 표시패에 있으면 <NN />이 도라가 된다.
          </li>
          <li>
            <GG /> 혹은 <NN />을 사용하여 자 400/친 700의 점수를 가지는 쯔모로
            화료할 수 있다.
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄴ, ㄷ, ㄱ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 2,
}

export default PROBLEM
