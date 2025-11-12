import Footer from '@/components/Footer'
import Information from '@/components/Information'
import OMRCard from '@/components/OMRCard'
import ProblemRenderer from '@/components/ProblemRenderer'
import PROBLEMS from '@/problems'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import { Fragment } from 'react/jsx-runtime'

ReactGA.initialize('G-Q6XMB86VEX', {
  gaOptions: {
    debug_mode: process.env.NODE_ENV !== 'production',
  },
})

export const Route = createFileRoute('/')({
  component: App,
})

const FullscreenLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

const ProblemWrapper = styled.div`
  flex: 3;
  min-width: 0;
  height: 100%;
  overflow: auto;
  background-color: #f9f9f9;
  scroll-behavior: smooth;
  scroll-padding: 16px 0;
`

const OMRWrapper = styled.div`
  flex: 0 0 280px;
  min-width: 0;
  height: 100%;
  overflow: auto;
  background-color: #f8f8e0;
  padding: 0 8px;

  @media (max-width: 1120px) {
    flex: 1 0 0;
  }
  @media (max-width: 768px) {
    flex: 0 0 64px;
  }
`

const ProblemContents = styled.div`
  max-width: 800px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

function App() {
  const { language } = useTheme()
  const [submitted, setSubmitted] = useState(false)
  const [answers, setAnswers] = useState(new Array(PROBLEMS.length).fill(-1))

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'ko' ? '리치 마작 영역' : 'リーチ麻雀領域'
  }, [language])

  const handleSubmission = () => {
    if (submitted) return

    const unanswered = answers
      .map((answer, index) => (answer === -1 ? index + 1 : null))
      .filter((v) => v !== null)
    if (unanswered.length > 0) {
      const confirmResult = window.confirm(
        language === 'ko'
          ? `다음 문제의 답안이 작성되지 않았습니다.\n${unanswered.join(', ')}\n\n계속하시겠습니까?`
          : `次の問題の解答が記入されていません。\n${unanswered.join(', ')}\n\n続行しますか？`,
      )
      if (!confirmResult) return
    }
    const confirmResult = window.confirm(
      language === 'ko'
        ? '제출한 답안은 수정할 수 없습니다. 제출하시겠습니까?'
        : '提出した解答は修正できません。提出しますか？',
    )
    if (!confirmResult) return

    const score = answers.reduce((acc, answer, index) => {
      if (answer === PROBLEMS[index].answer - 1) {
        return acc + PROBLEMS[index].score
      }
      return acc
    }, 0)

    ReactGA.event({
      category: 'Test',
      action: 'Complete Test',
      value: score,
      nonInteraction: true,
    })
    answers.forEach((answer, index) => {
      ReactGA.event({
        category: `Question ${index + 1}`,
        action: 'Submit Answer',
        label:
          answer === PROBLEMS[index].answer - 1
            ? `${answer} (Correct)`
            : `${answer} (Incorrect)`,
        nonInteraction: true,
      })
    })

    setSubmitted(true)
  }

  return (
    <FullscreenLayout>
      <OMRWrapper>
        <OMRCard
          answers={answers}
          onAnswerChange={(index, answer) => {
            if (submitted) return
            setAnswers((prev) => {
              const updated = [...prev]
              updated[index - 1] = answer
              return updated
            })
          }}
        />
      </OMRWrapper>
      <ProblemWrapper>
        <ProblemContents>
          <Information />
          {PROBLEMS.map((problem) => (
            <Fragment key={problem.index}>
              <div
                style={{
                  borderBottom: '1px solid #e0e0e0',
                }}
              />
              <ProblemRenderer
                problem={problem}
                answer={answers[problem.index - 1]}
                onAnswerChange={(newAnswer) => {
                  if (submitted) return
                  setAnswers((prev) => {
                    const updated = [...prev]
                    updated[problem.index - 1] = newAnswer
                    return updated
                  })
                }}
              />
            </Fragment>
          ))}
          <div
            style={{
              borderBottom: '1px solid #e0e0e0',
            }}
          />
          <Footer
            onClickSubmit={handleSubmission}
            answer={answers}
            submitted={submitted}
          />
        </ProblemContents>
      </ProblemWrapper>
    </FullscreenLayout>
  )
}
