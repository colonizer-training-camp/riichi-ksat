import Box가나다 from '@/components/Box가나다'
import O from '@/components/O'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { ㄱㄴ, ㄱㄴㄷ, ㄱㄷ, ㄴㄷ, ㄷ, 가, 나 } from '@/components/macros'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 2,
  score: 2,
  content: {
    ko: (
      <>
        다음은 패에 대한 자료이다. {<O index={1} />}은 ‘4삭’과 ‘5삭’ 중
        하나이다.
        <Box가나다>
          <li>{<O index={1} />}은 슌쯔를 만드는 데에 사용할 수 있다.</li>
          <li>
            {<O index={1} />}이 도라 표시패일 경우, ‘5삭’은 도라로 취급된다.
          </li>
        </Box가나다>
        이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?
        (단, 도라 표시패는 1개이다.)
        <Viewㄱㄴㄷ>
          <li>{<O index={1} />}은 ‘4삭’이다.</li>
          <li>{가}에서 만드는 슌쯔에는 ‘2삭’이 포함될 수 있다.</li>
          <li>
            {나}의 상황이 아니더라도 ‘5삭’ 4장 중 1장은 도라로 취급될 수 있다.
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        다음은 패에 대한 자료이다. {<O index={1} />}은 ‘4삭’과 ‘5삭’ 중
        하나이다.
        <Box가나다>
          <li>{<O index={1} />}은 슌쯔를 만드는 데에 사용할 수 있다.</li>
          <li>
            {<O index={1} />}이 도라 표시패일 경우, ‘5삭’은 도라로 취급된다.
          </li>
        </Box가나다>
        이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?
        (단, 도라 표시패는 1개이다.)
        <Viewㄱㄴㄷ>
          <li>{<O index={1} />}은 ‘4삭’이다.</li>
          <li>{가}에서 만드는 슌쯔에는 ‘2삭’이 포함될 수 있다.</li>
          <li>
            {나}의 상황이 아니더라도 ‘5삭’ 4장 중 1장은 도라로 취급될 수 있다.
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄷ, ㄱㄴ, ㄱㄷ, ㄴㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 5,
}

export default PROBLEM
