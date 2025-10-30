import ProblemRenderer from '@/components/ProblemRenderer'
import PROBLEMS from '@/problems'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div
      style={{
        padding: 32,
      }}
    >
      {PROBLEMS.map((problem) => (
        <div
          key={problem.index}
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
      ))}
    </div>
  )
}
