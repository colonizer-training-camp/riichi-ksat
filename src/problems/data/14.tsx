import { Em } from '@/components/Em'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 14,
  score: 2,
  content: {
    ko: (
      <>
        <p>
          그림은 남2국 0본장에 멘젠 상태인 어떤 작사의 손패이다. 이 작사가 현재
          손패에서 ‘3삭’으로 론 화료했을 때의 화료 점수로 <Em>불가능한</Em>{' '}
          것은? (단, 이 작사의 손패에는 적도라가 존재하지 않는다.)
        </p>
        <figure>
          <img src="/images/123m234456p4577s@2x.png" alt="123m234456p4577s" />
        </figure>
      </>
    ),
    ja: (
      <>
        <p>
          図はは南2局0本場で門前の状態にある雀士の手牌である。この雀士が現在の手牌から「3索」でロンアガリした場合のアガリ点として、
          <Em>不可能なもの</Em>
          はどれか。次のうちから一つ選べ。（ただし、この雀士の手牌には赤ドラは存在しないものとする。）
        </p>
        <figure>
          <img src="/images/123m234456p4577s@2x.png" alt="123m234456p4577s" />
        </figure>
      </>
    ),
  },
  options: [, '2,900', '3,900', '5,800', '7,700', '9,600'],
  optionPerRow: 5,
  answer: 5,
}

export default PROBLEM
