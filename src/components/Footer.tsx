import PROBLEMS from '@/problems'
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
import { useMemo } from 'react'
import Credits from './Credits'

const CIRCLE_NUMBERS = '①②③④⑤⑥⑦⑧⑨⑩'.split('')

const Precautions = styled.div`
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? SANS_JAPANESE : SANS_KOREAN).join(', ')};
  border: 1px solid black;
  padding: 1em;
`

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 128px;
`

const Button = styled.button`
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? SERIF_JAPANESE : SERIF_KOREAN).join(', ')};
  font-size: 1.4em;
  letter-spacing: 0.5em;
  font-weight: bold;
  border: 1px solid black;
  padding: 16px;
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  background-color: #e8e8e8;
  :not(:disabled):hover {
    background-color: #d0d0d0;
  }
`

const ScoreTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? SERIF_JAPANESE : SERIF_KOREAN).join(', ')};
  border: 2px solid black;
  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
  }
  tr:nth-child(5n) td {
    border-bottom: 2px solid black;
  }
  th {
    font-weight: bold;
    border-bottom: 2px solid black;
  }
`

const LinkToProblem = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const YourScoreIs = styled.div`
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? ROUNDED_JAPANESE : ROUNDED_KOREAN).join(', ')};
  font-size: 1.2em;
  text-align: center;
  line-height: 1;
`

const ScoreRow = styled.div`
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? SERIF_JAPANESE : SERIF_KOREAN).join(', ')};
  font-size: 1.2em;
  text-align: center;
  line-height: 1;
`

const ScoreValue = styled.span`
  font-size: 2.4em;
  font-weight: bold;
  line-height: 1;
`

interface Props {
  onClickSubmit: () => void
  answer: number[]
  submitted: boolean
}

const Footer = ({ onClickSubmit, answer, submitted }: Props) => {
  const { language } = useTheme()

  const score = useMemo(() => {
    return answer.reduce((acc, ans, index) => {
      if (ans === PROBLEMS[index].answer - 1) {
        return acc + PROBLEMS[index].score
      }
      return acc
    }, 0)
  }, [answer])

  const handleShare = () => {
    const answerCorrectEmojiString = answer
      .map((ans, index) => (ans === PROBLEMS[index].answer - 1 ? '✅' : '❌'))
      .join('')
    const text = [
      language === 'ko'
        ? '2026학년도 개척단 훈련소 마작능력평가'
        : '2026年度開拓民訓練キャンプ麻雀能力評価',
      '',
      language === 'ko'
        ? `나의 점수: ${score}/50점`
        : `私の得点: ${score}/50点`,
      answerCorrectEmojiString.slice(0, 10),
      answerCorrectEmojiString.slice(10, 20),
      '',
      `https://riichi-ksat.colonizer.training/?lang=${language}`,
    ].join('\n')

    navigator.clipboard.writeText(text).then(() => {
      alert(
        language === 'ko'
          ? '점수 공유 텍스트가 클립보드에 복사되었습니다. X 등에 붙여넣어서 공유해 보세요!'
          : '得点共有テキストがクリップボードにコピーされました。Xなどに貼り付けて共有してみてください！',
      )
    })
  }

  return (
    <FooterWrapper>
      {language === 'ko' ? (
        <Precautions>
          * 확인 사항
          <br />◦ 답안지의 해당란에 필요한 내용을 정확히 기입(표기)했는지
          확인하시오.
        </Precautions>
      ) : (
        <Precautions>
          * 注意事項
          <br />◦ 解答用紙の該当欄に必要な内容を正確に記入（表記）したか
          確認しなさい。
        </Precautions>
      )}
      <Button onClick={onClickSubmit} disabled={submitted}>
        {submitted
          ? language === 'ko'
            ? '제출 완료'
            : '提出完了'
          : language === 'ko'
            ? '제출하기'
            : '提出する'}
      </Button>
      {submitted && (
        <>
          <div style={{ height: 64 }} />
          <YourScoreIs>
            {language === 'ko' ? '당신의 점수는' : 'あなたの得点は'}
          </YourScoreIs>
          <ScoreRow>
            <ScoreValue>{score}</ScoreValue>/50{language === 'ko' ? '점' : '点'}
          </ScoreRow>
          <Button onClick={handleShare}>
            {language === 'ko' ? '공유하기' : '共有する'}
          </Button>
          <ScoreTable>
            <thead>
              <tr>
                <th>{language === 'ko' ? '문항 번호' : '問題番号'}</th>
                <th>{language === 'ko' ? '정답' : '正答'}</th>
                <th>{language === 'ko' ? '내 답안' : 'あなたの解答'}</th>
                <th>{language === 'ko' ? '배점' : '配点'}</th>
              </tr>
            </thead>
            <tbody>
              {answer.map((ans, index) => (
                <tr key={index}>
                  <td>
                    <LinkToProblem href={`#problem-${index + 1}`}>
                      {index + 1}
                    </LinkToProblem>
                  </td>
                  <td
                    style={{
                      color:
                        ans === PROBLEMS[index].answer - 1 ? 'unset' : 'red',
                      fontWeight:
                        ans === PROBLEMS[index].answer - 1 ? 'normal' : 'bold',
                    }}
                  >
                    {CIRCLE_NUMBERS[PROBLEMS[index].answer - 1]}
                  </td>
                  <td
                    style={{
                      color:
                        ans === PROBLEMS[index].answer - 1 ? 'unset' : 'red',
                      fontWeight:
                        ans === PROBLEMS[index].answer - 1 ? 'normal' : 'bold',
                    }}
                  >
                    {CIRCLE_NUMBERS[ans]}
                  </td>
                  <td>{PROBLEMS[index].score}</td>
                </tr>
              ))}
            </tbody>
          </ScoreTable>
          <Credits />
        </>
      )}
    </FooterWrapper>
  )
}

export default Footer
