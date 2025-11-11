import Box from '@/components/BoxNoIndent'
import ProblemScore from '@/components/ProblemScore'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { GG, NN, ㄱ, ㄱㄴ, ㄱㄴㄷ, ㄱㄷ, ㄴ } from '@/components/macros'
import type { Problem } from '../types'
import { Frac } from '@/components/Frac'

const PROBLEM: Problem = {
  index: 15,
  score: 3,
  content: {
    ko: (
      <>
        <p>
          다음은 작사 A～D가 반장전으로 2회 대국한 결과 및 그에 따른 우마 점수를
          순서 없이 나타낸 것이다. 순위에 따른 우마 증감은 1～4위 순으로 등차로
          작아진다.
        </p>
        <Box>
          ◦ 대국 1에서 C는 34,500점으로 종료하였다.
          <br />
          ◦ 대국 2에서 A와 B는 같은 점수로 종료하였다.
          <br />
          <table
            style={{
              marginTop: '1em',
            }}
          >
            <colgroup>
              <col style={{ width: '7em' }} />
              <col style={{ width: '4em' }} />
              <col style={{ width: '4em' }} />
              <col style={{ width: '4em' }} />
              <col style={{ width: '4em' }} />
            </colgroup>
            <thead>
              <tr>
                <th>작사</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>대국 1</td>
                <td>&minus;10.5</td>
                <td>
                  <GG />
                </td>
                <td>39.5</td>
                <td>&minus;44.0</td>
              </tr>
              <tr>
                <td>대국 2</td>
                <td></td>
                <td></td>
                <td>&minus;38.0</td>
                <td>&minus;14.0</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>우마 합 순위</td>
                <td>
                  <NN />
                </td>
                <td></td>
                <td>3</td>
                <td>4</td>
              </tr>
            </tfoot>
          </table>
        </Box>
        <p>
          이 자료에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 고른 것은? (단,
          시작 점수와 반환 점수는 모두 25,000점이며, 대국에서의 동점은 석순제로
          처리하였고, 우마 합의 동점은 없었다.) <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>대국 1에서 D는 11,000점으로 종료하였다.</li>
          <li>
            <Frac p={<GG />} q={<NN />} />은 15.0이다.
          </li>
          <li>대국 2에서 들통이 일어났다.</li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>
          次は雀士A〜Dが半荘戦で2回対局した結果およびそれに伴うポイント合を順位に関係なく示したものである。順位に応じたウマの増減は、1〜4位の順に等差で減少するものとする。
        </p>
        <Box>
          ◦ 第1戦でCは34,500点で終了した。
          <br />
          ◦ 第2戦でAとBは同点で終了した。
          <br />
          <table
            style={{
              marginTop: '1em',
            }}
          >
            <colgroup>
              <col style={{ width: '7em' }} />
              <col style={{ width: '4em' }} />
              <col style={{ width: '4em' }} />
              <col style={{ width: '4em' }} />
              <col style={{ width: '4em' }} />
            </colgroup>
            <thead>
              <tr>
                <th>雀士</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>第1戦</td>
                <td>&minus;10.5</td>
                <td>
                  <GG />
                </td>
                <td>39.5</td>
                <td>&minus;44.0</td>
              </tr>
              <tr>
                <td>第2戦</td>
                <td></td>
                <td></td>
                <td>&minus;38.0</td>
                <td>&minus;14.0</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>合計順位</td>
                <td>
                  <NN />
                </td>
                <td></td>
                <td>3</td>
                <td>4</td>
              </tr>
            </tfoot>
          </table>
        </Box>
        <p>
          これについての説明として正しいものを、&lt;例&gt;の中から選べ。（25,000点持ち、25,000点返し。対局での同点は席順で処理、ポイント合の同点はないものとする。）
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>第1戦でDは11,000点で終了した。</li>
          <li>
            <Frac p={<GG />} q={<NN />} />
            は15.0である。
          </li>
          <li>第2戦で飛びが起こった。</li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄴ, ㄱㄴ, ㄱㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 1,
}

export default PROBLEM
