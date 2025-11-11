import ProblemScore from '@/components/ProblemScore'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { GG, ㄱ, ㄱㄴㄷ, ㄱㄷ, ㄴ, ㄴㄷ } from '@/components/macros'
import { SANS_JAPANESE } from '@/styles/fonts'
import { O_GLYPHS_JA } from '@/utils/O'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 17,
  score: 3,
  content: {
    ko: (
      <>
        <p>
          그림은 동1국 0본장에 서가(西家)가 친(親)을 론 화료한 상황을 나타낸
          것이다. 이 대국 중에 ‘리치’를 선언한 작사는 없었으며, 이 작사의 화료로
          들통이 발생하여 대국이 종료되었다. ⓐ는 ‘남(南)’, ‘백(白)’ ‘발(發)’,
          ‘중(中)’을 제외한 패 중 하나이다.
        </p>
        <figure>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5207 1002">
            <image
              href="/images/z555777666z22_aa_z2@2x.png"
              width="5207"
              height="602"
            />
            <text
              x="4305"
              y="380"
              fontSize="200"
              textAnchor="middle"
              fill="inherit"
              strokeWidth="10"
            >
              ⓐ
            </text>
            <text
              x="4625"
              y="380"
              fontSize="200"
              textAnchor="middle"
              fill="inherit"
              strokeWidth="10"
            >
              ⓐ
            </text>
            <text
              x="5045"
              y="880"
              fontSize="200"
              textAnchor="middle"
              fill="inherit"
              strokeWidth="10"
            >
              론
            </text>
          </svg>
        </figure>
        <p>
          이 그림에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 고른 것은? (단,
          그림에서 ‘펑’은 왼쪽에서 오른쪽 순서로 일어났으며, 동점은 석순제로
          처리한다.) <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>ⓐ로 ‘9통’이 가능하다.</li>
          <li>북가(北家)는 2위로 종료하였다.</li>
          <li>남가(南家)와 북가(北家)의 순위 차이는 1이다.</li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>
          下の図は東1局0本場において、南家が親からロンアガリした状況を示したものである。この対局中、リーチを宣言した雀士はいなかった。このアガリで飛びが発生し、対局は終了した。{' '}
          <GG />
          は「南」、「白」、「發」、「中」を除く牌のいずれかである。
        </p>
        <figure>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5207 1002">
            <image
              href="/images/z555777666z22_aa_z2@2x.png"
              width="5207"
              height="602"
            />
            <text
              x="4305"
              y="380"
              fontSize="200"
              textAnchor="middle"
              fill="inherit"
              fontWeight="bold"
              fontFamily={SANS_JAPANESE.join(', ')}
            >
              {O_GLYPHS_JA[0]}
            </text>
            <text
              x="4625"
              y="380"
              fontSize="200"
              textAnchor="middle"
              fill="inherit"
              fontWeight="bold"
              fontFamily={SANS_JAPANESE.join(', ')}
            >
              {O_GLYPHS_JA[0]}
            </text>
            <text
              x="5045"
              y="880"
              fontSize="200"
              textAnchor="middle"
              fill="inherit"
            >
              ロン
            </text>
          </svg>
        </figure>
        <p>
          この図に関する説明として正しいものを、&lt;例&gt;の中から選べ。（ただし、図中の「ポン」は左から右の順で発生し、同点は席順で処理するものとする。）
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>
            <GG />
            には「九筒」が含まれる可能性がある。
          </li>
          <li>北家は2位で終了した。</li>
          <li>南家と北家の順位差は1である。</li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄴ, ㄱㄷ, ㄴㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 4,
}

export default PROBLEM
