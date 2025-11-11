import { Em } from '@/components/Em'
import type { Problem } from '../types'
import ProblemScore from '@/components/ProblemScore'

const PROBLEM: Problem = {
  index: 20,
  score: 3,
  content: {
    ko: (
      <>
        <p>
          다음 중 동1국 0본장이 종료된 후 일어날 수 <Em>없는</Em> 점수 교환은?
          (단, 대국 중에 ‘리치’를 선언한 작사는 없었다.)
          <ProblemScore score={3} />
        </p>
      </>
    ),
    ja: (
      <>
        <p>
          次のうち、東1局0本場が終了した後に<Em>発生し得ない</Em>
          点数のやり取りはどれか。次のうちから一つ選べ。（ただし、対局中にリーチを宣言した雀士はいなかったものとする。）
          <ProblemScore score={3} />
        </p>
      </>
    ),
  },
  options: [
    ,
    {
      ko: '서→동 24,000; 북→동 72,000',
      ja: '南→東 24,000; 北→東 72,000',
    },
    {
      ko: '동→서 1,500; 남→서 800; 북→서 800',
      ja: '東→南 1,500; 東→西 800; 東→北 800',
    },
    {
      ko: '북→동 288,000; 북→남 4,500',
      ja: '北→東 288,000; 北→南 4,500',
    },
    {
      ko: '서→남 7,100',
      ja: '西→南 7,100',
    },
    {
      ko: '남→동 240,000; 남→서 96,000; 남→북 96,000',
      ja: '南→東 240,000; 南→西 96,000; 南→北 96,000',
    },
  ],
  optionPerRow: 1,
  answer: 3,
}

export default PROBLEM
