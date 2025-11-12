import Information from '@/components/Information'
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
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: auto;
`

const OMRWrapper = styled.div`
  flex: 0 0 360px;
  min-width: 0;
  height: 100%;
  overflow: auto;
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
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
                answer={answers[problem.index]}
                onAnswerChange={(newAnswer) =>
                  setAnswers((prev) => {
                    const updated = [...prev]
                    updated[problem.index] = newAnswer
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
