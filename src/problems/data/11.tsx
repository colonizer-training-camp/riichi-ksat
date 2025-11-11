import ProblemScore from '@/components/ProblemScore'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { GG, ㄱㄴ, ㄱㄴㄷ, ㄱㄷ, ㄴㄷ, ㄷ } from '@/components/macros'
import { SANS_JAPANESE } from '@/styles/fonts'
import { O_GLYPHS_JA, O_GLYPHS_KO } from '@/utils/O'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 11,
  score: 3,
  content: {
    ko: (
      <>
        <p>
          그림은 작사 A의 버림패이다. 이에 대한 설명으로 옳은 것만을
          &lt;보기&gt;에서 있는 대로 고른 것은? (단, 역만 화료는 고려하지
          않는다.) <ProblemScore score={3} />
        </p>
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1929 1200"
            style={{
              minWidth: '50%',
              width: 240,
            }}
          >
            <image href="/images/riichi1@2x.png" width="1929" height="1029" />
            <text
              x="1498"
              y="1100"
              fontSize="140"
              textAnchor="middle"
              fill="inherit"
            >
              {O_GLYPHS_KO[0]}
            </text>
          </svg>
        </figure>
        <Viewㄱㄴㄷ>
          <li>
            <GG />은 A의 대기패가 아니다.
          </li>
          <li>
            A가 <GG /> 이후에 새로운 패를 타패하기 전에 화료한다면, A의 화료는
            최소 2판 이상이다.
          </li>
          <li>
            A가 화료하였다면, 그 화료에 한해 도라 표시패 아래의 뒷도라 표시패를
            공개하여 추가적인 도라 표시패로 취급하게 된다.
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>
          下の図は雀士Aの捨て牌である。これに関する説明として正しいものを、&lt;例&gt;の中から選べ。（ただし、役満アガリは考慮しないものとする。）
          <ProblemScore score={3} />
        </p>
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1929 1200"
            style={{
              minWidth: '50%',
              width: 240,
            }}
          >
            <image href="/images/riichi1@2x.png" width="1929" height="1029" />
            <text
              x="1498"
              y="1100"
              fontSize="140"
              textAnchor="middle"
              fill="inherit"
              strokeWidth="10"
              fontWeight="bold"
              fontFamily={SANS_JAPANESE.join(', ')}
            >
              {O_GLYPHS_JA[0]}
            </text>
          </svg>
        </figure>
        <Viewㄱㄴㄷ>
          <li>
            <GG />
            はAの待ち牌ではない。
          </li>
          <li>
            Aが
            <GG />
            の後、新しい牌を打牌する前にアガリした場合、Aのアガリは少なくとも2翻以上となる。
          </li>
          <li>
            Aがアガリしたならば、そのアガリに限りドラ表示牌の下にある裏ドラ表示牌を公開し、追加のドラ表示牌として扱う。
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄷ, ㄱㄴ, ㄱㄷ, ㄴㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 1,
}

export default PROBLEM
