import type { Language } from '@/hooks/useLanguage'
import useLanguage from '@/hooks/useLanguage'
import type { Problem } from '@/problems/types'
import { SERIF_JAPANESE, SERIF_KOREAN } from '@/styles/fonts'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import OptionRenderer from './OptionRenderer'
import ProblemNo from './ProblemNo'

const FontOverride = styled.div`
  font-family: ${({ theme }) =>
    (theme.language === 'ja' ? SERIF_JAPANESE : SERIF_KOREAN).join(', ')};
  text-align: justify;
`

const OptionContainer = styled.div`
  margin: 1em 0;
  display: grid;
`

interface Props {
  problem: Problem
  lang?: Language
}

const ProblemRenderer = ({ problem, lang }: Props) => {
  const { lang: defaultLang } = useLanguage()
  if (lang) {
    return (
      <ThemeProvider theme={{ language: lang }}>
        <FontOverride>
          <ProblemNo index={problem.index} />
          {problem.content[lang]}
          <OptionContainer
            style={{
              gridTemplateColumns: `repeat(${problem.optionPerRow}, 1fr)`,
            }}
          >
            {problem.options
              .filter((x) => x)
              .map((option, idx) => (
                <OptionRenderer key={idx} index={idx}>
                  {option && 'ko' in (option as Record<string, unknown>)
                    ? (option as Record<string, ReactNode>)[lang]
                    : (option as ReactNode)}
                </OptionRenderer>
              ))}
          </OptionContainer>
        </FontOverride>
      </ThemeProvider>
    )
  }
  return <>{problem.content[defaultLang]}</>
}

export default ProblemRenderer
