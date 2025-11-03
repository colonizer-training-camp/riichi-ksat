import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 8,
  score: 2,
  content: {
    ko: (
      <>
        <p>다음 중 멘젠 상태에서 판 수가 가장 높은 역은?</p>
      </>
    ),
    ja: (
      <>
        <p>門前の状態で翻数が最も高い役はどれか。次のうちから一つ選べ。</p>
      </>
    ),
  },
  options: [
    ,
    {
      ko: '청일색(清一色)',
      ja: '清一色',
    },
    {
      ko: '준찬타(純全帯幺九, 순전대요구)',
      ja: '純全帯幺九',
    },
    {
      ko: '삼색동각(三色同刻)',
      ja: '三色同刻',
    },
    {
      ko: '창깡(搶槓)',
      ja: '搶槓',
    },
    {
      ko: '산깡쯔(三槓子)',
      ja: '三槓子',
    },
  ],
  optionPerRow: 2,
  answer: 1,
}

export default PROBLEM
