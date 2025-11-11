import Box from '@/components/BoxNoIndent'
import ProblemScore from '@/components/ProblemScore'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { GG, ㄱ, ㄱㄴ, ㄱㄴㄷ, ㄱㄷ, ㄴ } from '@/components/macros'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 12,
  score: 3,
  content: {
    ko: (
      <>
        <p>다음은 A의 화료 직후의 대국자들의 대화 내용이다.</p>
        <Box>
          A: <GG />판 20부야.
          <br />
          B: 이걸 쯔모로 화료하는군.
          <br />
          C: 대기패의 종류가 2종이었구나.
          <br />
          D: 내 리치봉 돌려줘!
        </Box>
        <p>
          이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?{' '}
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>A는 양면 대기로 화료하였다.</li>
          <li>
            <GG />이 4일 경우, A의 화료는 만관이다.
          </li>
          <li>A는 멘젠 상태로 화료하였다.</li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>次はAのアガリ直後の対局者たちの会話である。</p>
        <Box>
          Ａ「<GG />
          翻20符だよ。」
          <br />
          Ｂ「これをツモでアガるのか。」
          <br />
          Ｃ「待ち牌は2種類だったのか。」
          <br />
          Ｄ「私のリーチ棒を返して！」
        </Box>
        <p>
          これについての説明として正しいものを、&lt;例&gt;の中から選べ。
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>Aは両面待ちでアガリした。</li>
          <li>
            <GG />
            が4の場合、Aのアガリは満貫である。
          </li>
          <li>Aは門前の状態でアガリした。</li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄴ, ㄱㄴ, ㄱㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 4,
}

export default PROBLEM
