import Box from '@/components/BoxNoIndent'
import Index from '@/components/Index'
import ProblemScore from '@/components/ProblemScore'
import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { GG, NN, ㄱ, ㄱㄴㄷ, ㄱㄷ, ㄴ, ㄴㄷ } from '@/components/macros'
import styled from '@emotion/styled'
import type { Problem } from '../types'

const B = styled.b`
  font-weight: bold;
`

const PROBLEM: Problem = {
  index: 19,
  score: 3,
  content: {
    ko: (
      <>
        <p>
          다음은 개척단 훈련소 디스코드의 대화 내용 중 일부이다. <GG />은
          ‘쯔모’와 ‘론’ 중 하나이다.
        </p>
        <Box>
          <B>HN:</B> 이게 말이 돼? 오늘 작혼에서 ‘역만 준비’만 두 번 봤는데 한
          번도 역만 화료를 못 했어.
          <br />
          <B>MAXFLOW:</B> 그래도 첫 번째 ‘역만 준비’는 <GG /> 화료했잖아.
          <br />
          <B>CCW:</B> 그 상황에서 1판 <NN />
          부로 화료한 건 조금 안타깝네.
          <br />
          <B>shiftpsh:</B> 두 번째 ‘역만 준비’ 상황에서는 샤보 대기로도, 양면
          대기로도 화료할 수 있었겠구나.
        </Box>
        <p>
          이 자료에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 고른 것은?
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>
            <GG />
            으로 ‘론’만이 가능하다.
          </li>
          <li>
            <NN />의 값으로 30이 가능하다.
          </li>
          <li>
            두 번째 ‘역만 준비’ 상황에서 자패로 화료할 경우 역만 이상의 화료만이
            가능하다.
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>
          次は開拓団訓練所のDiscordの会話の一部である。
          <GG />
          は「ツモ」または「ロン」のいずれかである。
        </p>
        <Box>
          <Index>HN</Index>
          「これってありえない？今日の役満チャンス、2回あったけど一度も役満でアガリできなかったよ。」
          <br />
          <Index>MAXFLOW</Index>
          「でも、最初の役満チャンスは
          <GG />
          でアガリしたじゃないか。」
          <br />
          <Index>CCW</Index>
          「あの状況で1翻・
          <NN />
          符でアガリしたのはちょっと残念だね。」
          <br />
          <Index>shiftpsh</Index>
          「2回目の役満チャンスでは、シャボ待ちでも両面待ちでもアガリできたはずだ。」
        </Box>
        <p>
          これについての説明として正しいものを、&lt;例&gt;の中から選べ。
          <ProblemScore score={3} />
        </p>
        <Viewㄱㄴㄷ>
          <li>
            <GG />
            には「ロン」のみが可能である。
          </li>
          <li>
            <NN />
            の値として30は可能である。
          </li>
          <li>
            2回目の役満チャンスの状況で字牌でアガリした場合、役満以上のアガリのみが可能である。
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄴ, ㄱㄷ, ㄴㄷ, ㄱㄴㄷ],
  optionPerRow: 3,
  answer: 2,
}

export default PROBLEM
