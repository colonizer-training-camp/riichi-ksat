import ProblemScore from '@/components/ProblemScore'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { ㄱㄴ, ㄱㄴㄷ, ㄱㄷ, ㄴ, ㄷ } from '@/components/macros'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 10,
  score: 2,
  content: {
    ko: (
      <>
        <p>
          &lt;보기&gt;는 작사들이 자신의 화료 점수를 계산한 것이다. 이 중 옳게
          계산한 점수만을 있는 대로 고른 것은? (단, 본장에 의한 추가 점수는
          고려하지 않는다.) <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>자의 3판 60부 론 화료: 7,700점.</li>
          <li>친의 2판 90부 쯔모 화료: 2,900점 ALL.</li>
          <li>자의 1판 110부 론 화료: 3,900점.</li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>
          &lt;例&gt;は雀士たちが自分のアガリ点を計算したものである。この中で正しく計算された点数だけを選べ。（ただし、本場による加点は考慮しないものとする。）
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>子の3翻60符 ロン：7,700</li>
          <li>親の2翻90符 ツモ：2,900オール</li>
          <li>子の1翻110符 ロン：3,900</li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄴ, ㄷ, ㄱㄴ, ㄱㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 3,
}

export default PROBLEM
