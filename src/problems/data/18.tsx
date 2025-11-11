import Box가나다 from '@/components/Box가나다'
import ProblemScore from '@/components/ProblemScore'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { ㄱ, ㄱㄴㄷ, ㄴ, ㄴㄷ, ㄷ } from '@/components/macros'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 18,
  score: 3,
  content: {
    ko: (
      <>
        <p>다음은 서로 다른 종류의 패 A～C에 대한 자료이다.</p>
        <Box가나다>
          <li>A는 B의 스지이다.</li>
          <li>A와 C를 안커로 사용했을 때의 부수는 모두 8부이다.</li>
          <li>
            남가가 ‘깡’을 발성한 이후 서가가 B와 C를 모두 ‘펑’ 했을 때 서가가
            화료 가능한 역만은 2종류이다.
          </li>
        </Box가나다>
        <p>
          이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?
          (단, 헤아림 역만은 고려하지 않는다.)
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>A로 가능한 패는 3종류이다.</li>
          <li>B로 가능한 패는 2종류이다.</li>
          <li>C로 가능한 패는 1종류이다.</li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>次は異なる牌A〜Cに関する記述である。</p>
        <Box가나다>
          <li>AはBのスジである。</li>
          <li>AとCを暗刻として使用した場合の符はそれぞれ8符となる。</li>
          <li>
            南家が「カン」を発声した後、西家がBとCをそれぞれ「ポン」した場合、西家がアガリ可能な役は2種類である。
          </li>
        </Box가나다>
        <p>
          これについての説明として正しいものを、&lt;例&gt;の中から選べ。（ただし、数え役満は考慮しないものとする。）
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>Aで可能な牌は3種類である。</li>
          <li>Bで可能な牌は2種類である。</li>
          <li>Cで可能な牌は1種類である。</li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄴ, ㄷ, ㄴㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 4,
}

export default PROBLEM
