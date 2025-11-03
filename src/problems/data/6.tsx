import Box가나다 from '@/components/Box가나다'
import ProblemScore from '@/components/ProblemScore'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { GG, ㄱ, ㄱㄴ, ㄱㄴㄷ, ㄱㄷ, ㄴㄷ, 나 } from '@/components/macros'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 6,
  score: 3,
  content: {
    ko: (
      <>
        <p>다음은 4인 리치 마작에 대한 자료이다.</p>
        <Box가나다>
          <li>
            리치 마작의 패는 모두 34종류로, 총 <GG />
            장의 패를 사용한다.
          </li>
          <li>
            리치 마작에서는 왕패 14장을 사용한다. 이 중 영상패 4장을 제외한
            10장은 누구든 어떤 방법으로도 가져가지 못한다.
          </li>
        </Box가나다>
        <p>
          이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?{' '}
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>
            <GG />은 136이다.
          </li>
          <li>
            {나}에도 불구하고 대국 중 ‘깡’ 발성으로 왕패의 개수가 영구히 줄어들
            수 있다.
          </li>
          <li>
            대국 중 아무 발성 없이 황패유국된 경우 패산의 마지막 패는
            남가(南家)가 가져간다.
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>다음은 4인 리치 마작에 대한 자료이다.</p>
        <Box가나다>
          <li>
            리치 마작의 패는 모두 34종류로, 총 <GG />
            장의 패를 사용한다.
          </li>
          <li>
            리치 마작에서는 왕패 14장을 사용한다. 이 중 영상패 4장을 제외한
            10장은 누구든 어떤 방법으로도 가져가지 못한다.
          </li>
        </Box가나다>
        <p>
          이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?
        </p>
        <Viewㄱㄴㄷ>
          <li>
            <GG />은 136이다.
          </li>
          <li>
            {나}에도 불구하고 대국 중 ‘깡’ 발성으로 왕패의 개수가 영구히 줄어들
            수 있다.
          </li>
          <li>
            대국 중 아무 발성 없이 황패유국된 경우 패산의 마지막 패는
            남가(南家)가 가져간다.
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄱㄴ, ㄱㄷ, ㄴㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 3,
}

export default PROBLEM
