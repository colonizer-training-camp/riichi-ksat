import { ROUNDED_JAPANESE, ROUNDED_KOREAN } from '@/styles/fonts'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const OMR_COLOR = '#1e67a2'
const MARK_COLOR = '#eb028c'

const OMRContainer = styled.div`
  width: 240px;
  max-width: 100%;
  border: 2px solid ${OMR_COLOR};
  border-radius: 16px;
  margin: 32px auto;
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? ROUNDED_JAPANESE : ROUNDED_KOREAN).join(', ')};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
`

const OMRRow = styled.div`
  display: flex;
`

const OMRProblemNumber = styled.a`
  flex: 1;
  display: block;
  text-align: center;
  padding: 8px 0;
  border-right: 1px solid ${OMR_COLOR};
  color: ${OMR_COLOR};
  background-color: #dde0ef;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 768px) {
    border-right: none;
  }
`

const OMRMarkContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    display: none;
  }
`

const OMRHeaderLeft = styled(OMRProblemNumber)`
  font-weight: bold;
  border-bottom: 1px solid ${OMR_COLOR};
`

const OMRHeaderRight = styled(OMRProblemNumber)`
  flex: 4;
  font-weight: bold;
  border-right: none;
  border-bottom: 1px solid ${OMR_COLOR};
  cursor: default;
  @media (max-width: 768px) {
    display: none;
  }
`

const OMRHeaderRightFirstLetter = styled.span`
  letter-spacing: 2em;
`

interface MarkItemProps {
  selected: boolean
}

const MarkItem = styled.div<MarkItemProps>`
  color: ${MARK_COLOR};
  font-size: 80%;
  line-height: 1.5em;
  width: 1em;
  text-align: center;
  border: 1px solid;
  border-radius: 1.5em;
  ${({ selected }) =>
    selected
      ? `
    background-color: black;
    color: white;
    border-color: black;
    font-weight: bold;
  `
      : ''}
  cursor: pointer;
`

interface Props {
  answers: number[]
  onAnswerChange: (index: number, answer: number) => void
}

const OMRCard = ({ answers, onAnswerChange }: Props) => {
  const { language } = useTheme()
  return (
    <OMRContainer>
      <OMRRow>
        <OMRHeaderLeft href="#information">
          {language === 'ko' ? '문번' : '問題'}
        </OMRHeaderLeft>
        <OMRHeaderRight>
          {language === 'ko' ? (
            <>
              <OMRHeaderRightFirstLetter>답</OMRHeaderRightFirstLetter>란
            </>
          ) : (
            <>
              <OMRHeaderRightFirstLetter>解</OMRHeaderRightFirstLetter>答
            </>
          )}
        </OMRHeaderRight>
      </OMRRow>
      {answers.map((answer, index) => (
        <OMRRow key={index}>
          <OMRProblemNumber
            href={`#problem-${index + 1}`}
            style={
              index % 5 === 4
                ? {
                    fontWeight: 'bold',
                    borderBottom:
                      index === 19 ? 'unset' : `1px solid ${OMR_COLOR}`,
                  }
                : { fontSize: '90%' }
            }
            tabIndex={0}
          >
            {index + 1}
          </OMRProblemNumber>
          <OMRMarkContainer
            style={
              index % 5 === 4
                ? {
                    borderBottom:
                      index === 19 ? 'unset' : `1px solid ${OMR_COLOR}`,
                  }
                : undefined
            }
          >
            {[1, 2, 3, 4, 5].map((mark) => (
              <MarkItem
                key={mark}
                selected={answer + 1 === mark}
                onClick={() => onAnswerChange(index + 1, mark - 1)}
                tabIndex={0}
              >
                {answer + 1 === mark ? <>&nbsp;</> : mark}
              </MarkItem>
            ))}
          </OMRMarkContainer>
        </OMRRow>
      ))}
    </OMRContainer>
  )
}

export default OMRCard
