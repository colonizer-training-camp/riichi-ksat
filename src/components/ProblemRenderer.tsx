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
  font-feature-settings: ${({ theme }) =>
    theme.language === 'ja' ? '"palt", "jp04", "jp83"' : 'inherit'};
`

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
  & > figure {
    margin: 1em 0;
    text-align: center;
    filter: grayscale(1);
    & > img {
      max-width: 90%;
      height: auto;
    }
  }
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
          <ProblemContent>
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
          </ProblemContent>
        </FontOverride>
      </ThemeProvider>
    )
  }
  return <>{problem.content[defaultLang]}</>
}

export default ProblemRenderer
