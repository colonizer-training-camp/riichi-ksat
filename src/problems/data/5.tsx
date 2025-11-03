import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { ㄱㄴ, ㄱㄴㄷ, ㄴ, ㄴㄷ, ㄷ } from '@/components/macros'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 5,
  score: 2,
  content: {
    ko: (
      <>
        <p>
          그림은 어떤 작사가 받은 배패이다. 이와 관련된 설명으로 옳은 것만을
          &lt;보기&gt;에서 있는 대로 고른 것은?
        </p>
        <figure>
          <img src="/images/12679m11349p9s127z@2x.png" alt="12679m11349p9s127z" />
        </figure>
        <Viewㄱㄴㄷ>
          <li>이 배패에는 자패가 모두 8장이 있다.</li>
          <li>현재 패산에는 ‘1통’이 2장 이하이다.</li>
          <li>이 작사는 1순에 유국을 선언할 수 없다.</li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>
          図はある雀士が受け取った配牌である。これに関する説明として正しいものを、&lt;例&gt;の中から選べ。
        </p>
        <figure>
          <img src="/images/12679m11349p9s127z@2x.png" alt="12679m11349p9s127z" />
        </figure>
        <Viewㄱㄴㄷ>
          <li>この配牌には自牌がすべて8枚ある。</li>
          <li>現在の牌山には「一筒」が2枚以下である。</li>
          <li>この雀士は第一巡に流局を宣言することができない。</li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄴ, ㄷ, ㄱㄴ, ㄴㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 1,
}

export default PROBLEM
