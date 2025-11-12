import Information from '@/components/Information'
import ProblemRenderer from '@/components/ProblemRenderer'
import PROBLEMS from '@/problems'
import { ThemeProvider } from '@emotion/react'
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
          <ThemeProvider theme={{ language: 'ko' }}>
            <Information />
          </ThemeProvider>
        </div>
        <div
          style={{
            minWidth: 0,
            flex: 1,
          }}
        >
          <ThemeProvider theme={{ language: 'ja' }}>
            <Information />
          </ThemeProvider>
        </div>
      </div>
      {PROBLEMS.map((problem, i) => (
        <Fragment key={problem.index}>
          <div
            style={{
              borderBottom: '1px solid #e0e0e0',
            }}
          />
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
