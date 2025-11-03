import ProblemRenderer from '@/components/ProblemRenderer'
import PROBLEMS from '@/problems'
import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        padding: 32,
      }}
    >
      {PROBLEMS.map((problem, i) => (
        <Fragment key={problem.index}>
          {i > 0 && (
            <div
              style={{
                borderBottom: '1px solid #e0e0e0',
              }}
            />
          )}
          <div
            style={{
              display: 'flex',
              gap: 16,
            }}
          >
            <div
              style={{
                minWidth: 0,
                flex: 1,
              }}
            >
              <ProblemRenderer problem={problem} lang="ko" />
            </div>
            <div
              style={{
                minWidth: 0,
                flex: 1,
              }}
            >
              <ProblemRenderer problem={problem} lang="ja" />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}
