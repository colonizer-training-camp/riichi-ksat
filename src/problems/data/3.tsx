import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 3,
  score: 2,
  content: {
    ko: (
      <>
        <p>다음 중 첫 친(親)을 나타내는 말로 옳은 것은?</p>
      </>
    ),
    ja: (
      <>
        <p>次のうち、最初の親を表す言葉の読みとして正しいものを選べ。</p>
      </>
    ),
  },
  options: [
    ,
    { ko: '킬로', ja: 'チーズ' },
    { ko: '메가', ja: 'チーニャ' },
    { ko: '기가', ja: 'チーチャ' },
    { ko: '테라', ja: 'チーター' },
    { ko: '페타', ja: 'チートイツ' },
  ],
  optionPerRow: 3,
  answer: 3,
}

export default PROBLEM
