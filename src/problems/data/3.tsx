import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 3,
  score: 2,
  content: {
    ko: <>다음 중 첫 친(親)을 나타내는 말로 옳은 것은?</>,
    ja: <>다음 중 첫 친(親)을 나타내는 말로 옳은 것은?</>,
  },
  options: [
    ,
    { ko: '킬로', ja: '킬로' },
    { ko: '메가', ja: '메가' },
    { ko: '기가', ja: '기가' },
    { ko: '테라', ja: '테라' },
    { ko: '페타', ja: '페타' },
  ],
  optionPerRow: 3,
  answer: 3,
}

export default PROBLEM
