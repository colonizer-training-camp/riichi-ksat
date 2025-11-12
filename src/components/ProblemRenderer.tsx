import type { Language } from '@/hooks/useLanguage'
import useLanguage from '@/hooks/useLanguage'
import type { Problem } from '@/problems/types'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import { FontOverride } from './FontOverride'
import OptionRenderer from './OptionRenderer'
import ProblemNo from './ProblemNo'

const OptionContainer = styled.div`
  margin: 1em 0;
  display: grid;
`

const ProblemContent = styled.div`
  & > p {
    margin: 1em 0;
    text-indent: 1em;
  }
  & > p:first-of-type {
    display: inline;
    margin-top: 0;
    text-indent: 0;
  }
  & img,
  & svg {
    filter: grayscale(1);
  }
  & > figure {
    margin: 1em 0;
    text-align: center;
    & img,
    & svg {
      max-width: 90%;
      height: auto;
    }
  }
  & table {
    margin: 0 auto;
    border-collapse: collapse;
    & tr {
      & > th,
      & > td {
        border: 1px solid;
        padding: 0.2em 0.5em;
        text-align: center;
      }
    }
  }
`

interface Props {
  problem: Problem
  lang?: Language
  answer: number
  onAnswerChange: (answer: number) => void
}

const ProblemRenderer = ({ problem, lang, answer, onAnswerChange }: Props) => {
  const { lang: defaultLang } = useLanguage()

  const component = (
    <ProblemContent id={`problem-${problem.index}`}>
      <ProblemNo index={problem.index} />
      {problem.content[lang || defaultLang]}
      <OptionContainer
        style={{
          gridTemplateColumns: `repeat(${problem.optionPerRow}, 1fr)`,
        }}
      >
        {problem.options
          .filter((x) => x)
          .map((option, idx) => (
            <OptionRenderer
              key={idx}
              index={idx}
              active={answer === idx}
              onClick={() => onAnswerChange(idx)}
            >
              {option &&
              typeof option === 'object' &&
              'ko' in (option as Record<string, unknown>)
                ? (option as Record<string, ReactNode>)[lang || defaultLang]
                : (option as ReactNode)}
            </OptionRenderer>
          ))}
      </OptionContainer>
    </ProblemContent>
  )

  if (lang) {
    return (
      <ThemeProvider theme={{ language: lang }}>
        <FontOverride>{component}</FontOverride>
      </ThemeProvider>
    )
  }
  return component
}

export default ProblemRenderer
