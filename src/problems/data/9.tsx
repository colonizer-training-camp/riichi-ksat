import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import type { Problem } from '../types'

const PROBLEM: Problem = {
  index: 9,
  score: 2,
  content: {
    ko: (
      <>
        <p>
          &lt;보기&gt;는 마작 동아리 학생들이 역만 역 A에 대해 토론한 내용이다.
          역 A의 이름으로 옳은 것은?
        </p>
        <Viewㄱㄴㄷ>
          <li>A는 멘젠으로만 화료할 수 있어.</li>
          <li>A로 화료할 때 요구패를 사용할 수 있겠군.</li>
          <li>수패만을 사용해서 A로 화료할 수 있을 것 같아.</li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>
          &lt;例&gt;は麻雀クラブの学生たちが役満である「A」について議論した内容である。
          役「A」の名称として正しいものはどれか。次のうちから一つ選べ。
        </p>
        <Viewㄱㄴㄷ>
          <li>「「A」は門前でしかアガリができない。」</li>
          <li>「「A」でアガるとき、么九牌を使うことができる。」</li>
          <li>「数牌だけを使ってAでアガリができるようだ。」</li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [
    ,
    {
      ko: '구련보등(九蓮宝燈)',
      ja: '九蓮宝燈',
    },
    {
      ko: '국사무쌍(国士無双)',
      ja: '国士無双',
    },
    {
      ko: '녹일색(緑一色)',
      ja: '緑一色',
    },
    {
      ko: '대삼원(大三元)',
      ja: '大三元',
    },
    {
      ko: '청노두(清老頭)',
      ja: '清老頭',
    },
  ],
  optionPerRow: 1,
  answer: 1,
}

export default PROBLEM
