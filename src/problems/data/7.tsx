import Viewㄱㄴㄷ from '@/components/Viewㄱㄴㄷ'
import { GG, NN, ㄱ, ㄱㄴ, ㄴ, ㄴㄷ, ㄷ } from '@/components/macros'
import styled from '@emotion/styled'
import type { Problem } from '../types'

const ImageContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`

const ImageItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  & > img {
    height: 4em;
  }
`

const PROBLEM: Problem = {
  index: 7,
  score: 2,
  content: {
    ko: (
      <>
        <p>그림은 마작에서 사용하는 패를 나타낸 것이다.</p>
        <ImageContainer>
          <ImageItem>
            <GG />
            <img src="/images/z5@2x.png" alt="5z" />
          </ImageItem>
          <ImageItem>
            <NN />
            <img src="/images/z7@2x.png" alt="7z" />
          </ImageItem>
        </ImageContainer>
        <p>
          이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?
        </p>
        <Viewㄱㄴㄷ>
          <li>
            <GG />
            에는 <NN />과 달리 아무것도 쓰여 있지 않아 원하는 패로 사용할 수
            있다.
          </li>
          <li>
            <GG />이 도라 표시패에 있으면 <NN />이 도라가 된다.
          </li>
          <li>
            <GG /> 혹은 <NN />을 사용하여 자 400/친 700의 점수를 가지는 쯔모로
            화료할 수 있다.
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
    ja: (
      <>
        <p>図は麻雀で使用する牌を示したものである。</p>
        <ImageContainer>
          <ImageItem>
            <GG />
            <img src="/images/z5@2x.png" alt="5z" />
          </ImageItem>
          <ImageItem>
            <NN />
            <img src="/images/z7@2x.png" alt="7z" />
          </ImageItem>
        </ImageContainer>
        <p>これについての説明として正しいものを、&lt;例&gt;の中から選べ。</p>
        <Viewㄱㄴㄷ>
          <li>
            <GG />
            には
            <NN />
            と異なり何も図柄が書かれておらず、どの牌の代わりにもなる。
          </li>
          <li>
            <GG />
            がドラ表示牌にあれば、
            <NN />
            がドラになる。
          </li>
          <li>
            <GG />
            または
            <NN />
            を使用して、子400／親700の点数でツモ和了することができる。
          </li>
        </Viewㄱㄴㄷ>
      </>
    ),
  },
  options: [, ㄱ, ㄴ, ㄷ, ㄱㄴ, ㄴㄷ],
  optionPerRow: 3,
  answer: 3,
}

export default PROBLEM
