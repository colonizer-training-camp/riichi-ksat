import {
  ROUNDED_JAPANESE,
  ROUNDED_KOREAN,
  SANS_JAPANESE,
  SANS_KOREAN,
  SERIF_JAPANESE,
  SERIF_KOREAN,
} from '@/styles/fonts'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Em } from './Em'
import { FontOverride } from './FontOverride'

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 32px);
  padding: 16px;
  gap: 32px;
  justify-content: center;
`

const Subtitle = styled.span`
  display: block;
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? ROUNDED_JAPANESE : ROUNDED_KOREAN).join(', ')};
  font-size: 1.4em;
  text-align: center;
  line-height: 1;
`

const Title = styled.h1`
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? ROUNDED_JAPANESE : SERIF_KOREAN).join(', ')};
  font-size: 2.5em;
  text-align: center;
  font-weight: ${({ theme }) => (theme.language === 'ja' ? 400 : 700)};
  line-height: 1;
`

const TimeRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Time = styled.span`
  font-size: 1.4em;
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? SERIF_JAPANESE : SERIF_KOREAN).join(', ')};
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
  padding: 0 16px;
  border-radius: 1000px;
  word-break: keep-all;
  white-space: nowrap;
`

const Precautions = styled.ul`
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? SANS_JAPANESE : SANS_KOREAN).join(', ')};
  border: 1px solid black;
  padding: 2em 2em 2em 2.4em;
  list-style-type: '○ ';
  & > li {
    margin: 1em 0;
  }
`

const PrecautionDoNotScroll = styled.span`
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? SANS_JAPANESE : SANS_KOREAN).join(', ')};
  border: 1px solid black;
  padding: 1em;
  text-align: center;
  background-color: #e8e8e8;
`

export const Information = () => {
  const { language } = useTheme()

  return (
    <FontOverride>
      <InformationContainer id="information">
        <TimeRow>
          <Time>{language === 'ja' ? '第1時限' : '제 1교시'}</Time>
        </TimeRow>
        <Subtitle>
          {language === 'ja'
            ? '2026年度開拓民訓練キャンプ麻雀能力評価試験問題'
            : '2026학년도 개척단 훈련소 마작능력평가 문제지'}
        </Subtitle>
        <Title>{language === 'ja' ? 'リーチ麻雀科目' : '리치 마작 영역'}</Title>
        <Precautions>
          <li>
            {language === 'ko' ? (
              <>
                문항에 따라 배점이 다릅니다. 3점 문항에는 점수가 표시되어
                있습니다. 점수 표시가 없는 문항은 모두 2점입니다.
              </>
            ) : (
              <>
                問題によって配点が異なります。3点問題には点数が表示されています。点数表示のない問題はすべて2点です。
              </>
            )}
          </li>
          <li>
            {language === 'ko' ? (
              <>
                별도로 명시되어 있지 않은 경우,{' '}
                <Em
                  style={{
                    fontFamily: 'inherit',
                  }}
                >
                  &lt;작혼: 리치 마작&gt;의 4인 등급전에서의 규칙을 적용하여
                  문제를 해결
                </Em>
                하시오.
              </>
            ) : (
              <>
                特に明示されていない場合、
                <Em>『雀魂』の4人段位戦でのルールを適用して問題を解決</Em>
                しなさい。
              </>
            )}
          </li>
        </Precautions>
        <PrecautionDoNotScroll>
          {language === 'ko'
            ? '※ 시험을 시작하려면 아래로 스크롤하시오.'
            : '※ 試験を開始するには下にスクロールしなさい。'}
        </PrecautionDoNotScroll>
        <Subtitle>
          {language === 'ja' ? '開拓民訓練キャンプ' : '개척단 훈련소'}
        </Subtitle>
      </InformationContainer>
    </FontOverride>
  )
}

export default Information
