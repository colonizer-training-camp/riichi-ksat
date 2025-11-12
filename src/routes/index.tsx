import Information from '@/components/Information'
import OMRCard from '@/components/OMRCard'
import ProblemRenderer from '@/components/ProblemRenderer'
import PROBLEMS from '@/problems'
import styled from '@emotion/styled'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Fragment } from 'react/jsx-runtime'

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
  const [answers, setAnswers] = useState(new Array(PROBLEMS.length).fill(-1))

  return (
    <FullscreenLayout>
      <OMRWrapper>
        <OMRCard
          answers={answers}
          onAnswerChange={(index, answer) =>
            setAnswers((prev) => {
              const updated = [...prev]
              updated[index - 1] = answer
              return updated
            })
          }
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
                onAnswerChange={(newAnswer) =>
                  setAnswers((prev) => {
                    const updated = [...prev]
                    updated[problem.index - 1] = newAnswer
                    return updated
                  })
                }
              />
            </Fragment>
          ))}
        </ProblemContents>
      </ProblemWrapper>
    </FullscreenLayout>
  )
}
