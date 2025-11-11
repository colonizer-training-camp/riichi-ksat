import Box가나다 from '@/components/Box가나다'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { ㄱ, ㄱㄴ, ㄱㄴㄷ, ㄴㄷ, ㄷ } from '@/components/macros'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 16,
  score: 2,
  content: {
    ko: (
      <>
        <p>다음은 1판역 A에 대한 자료이다.</p>
        <Box가나다>
          <li>
            A는 ‘론’으로 화료할 수 있으나, ‘치’를 한 상황에서는 A로 화료할 수
            없다.
          </li>
          <li>
            A는 양면 대기로는 화료할 수 있으나, 변짱 대기로는 화료할 수 없다.
          </li>
        </Box가나다>
        <p>
          이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?
        </p>
        <Viewㄱㄴㄷ>
          <li>자패가 있을 경우에는 A로 화료할 수 없다.</li>
          <li>대기패가 한 종류일 경우에는 A로 화료할 수 없다.</li>
          <li>멘젠 상태가 아니면 A로 화료할 수 없다.</li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>次は1翻役である「A」に関する資料である。</p>
        <Box가나다>
          <li>
            「A」は「ロン」でアガリできるが、「チー」を行った場合はAでアガリができない。
          </li>
          <li>
            「A」は両面待ちでアガリできるが、辺張待ちではアガリができない。
          </li>
        </Box가나다>
        <p>これについての説明として正しいものを、&lt;例&gt;の中から選べ。</p>
        <Viewㄱㄴㄷ>
          <li>字牌がある場合、「A」でアガリができない。</li>
          <li>待ち牌が1種類の場合、「A」でアガリができない。</li>
          <li>門前でなければ、「A」でアガリができない。</li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄷ, ㄱㄴ, ㄴㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 2,
}

export default PROBLEM
