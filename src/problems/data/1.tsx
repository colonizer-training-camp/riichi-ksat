import Box가나다 from '@/components/Box가나다'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import {
  GG,
  NN,
  ㄱ,
  ㄱㄴ,
  ㄱㄴㄷ,
  ㄱㄷ,
  ㄴㄷ,
  가,
  나,
} from '@/components/macros'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 1,
  score: 2,
  content: {
    ko: (
      <>
        <p>다음은 마작의 역 A에 대한 자료이다.</p>
        <Box가나다>
          <li>A로 화료하기 위해서는 2에서 8까지의 수패만을 사용하여야 한다.</li>
          <li>
            A의 명칭은 <GG>요구(么九)패</GG>를 사용하지 않음을 뜻한다.
          </li>
          <li>
            일반적으로 <NN>멘젠 상태</NN>가 아니더라도 A로 화료할 수 있다.
          </li>
        </Box가나다>
        <p>
          이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?
        </p>
        <Viewㄱㄴㄷ>
          <li>A는 1판역이다.</li>
          <li>{가}의 예로는 ‘동(東)’ 패가 있다.</li>
          <li>‘치’ 발성을 한 작사는 {나} 상태이다.</li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>下の文は麻雀のある役「A」についての説明である。</p>
        <Box가나다>
          <li>「A」でアガるためには2から8までの数牌だけを使うしかない。</li>
          <li>
            「A」の名称は<GG>么九牌</GG>を使わないことを意味する。
          </li>
          <li>
            一般的には<NN>門前状態</NN>
            でなくても「A」でアガリができる。
          </li>
        </Box가나다>
        <p>これについての説明として正しいものを、&lt;例&gt;の中から選べ。</p>
        <Viewㄱㄴㄷ>
          <li>「A」は1翻役である。</li>
          <li>{가}の例としては「東」牌がある。</li>
          <li>「チー」をした雀士は{나}状態である。</li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄱㄴ, ㄱㄷ, ㄴㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 2,
}

export default PROBLEM
