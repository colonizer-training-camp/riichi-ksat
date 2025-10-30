import useLanguage from '@/hooks/useLanguage'
import { SERIF_JAPANESE, SERIF_KOREAN } from '@/styles/fonts'
import { css, Global, ThemeProvider } from '@emotion/react'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import emotionReset from 'emotion-reset'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: () => {
    const { lang } = useLanguage()

    useEffect(() => {
      document.documentElement.lang = lang
    }, [lang])

    return (
      <ThemeProvider theme={{ language: lang }}>
        <Global
          styles={css`
            ${emotionReset}
            body {
              font-family: ${lang === 'ja'
                ? SERIF_JAPANESE.join(', ')
                : SERIF_KOREAN.join(', ')};
              line-height: 1.6;
            }
            *,
            *::after,
            *::before {
              box-sizing: border-box;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              font-smoothing: antialiased;
            }
            @counter-style ga_na_da {
              system: cyclic;
              symbols: '가' '나' '다' '라' '마' '바' '사' '아' '자' '차' '카'
                '타' '파' '하';
              prefix: '(';
              suffix: ') ';
            }
            @counter-style i_ii_iii {
              system: cyclic;
              symbols: 'Ⅰ' 'Ⅱ' 'Ⅲ' 'Ⅳ' 'Ⅴ' 'Ⅵ' 'Ⅶ' 'Ⅷ' 'Ⅸ' 'Ⅹ';
              prefix: '(';
              suffix: ') ';
            }
            @counter-style g_n_d {
              system: cyclic;
              symbols: "ㄱ" "ㄴ" "ㄷ" "ㄹ" "ㅁ" "ㅂ" "ㅅ" "ㅇ" "ㅈ" "ㅊ" "ㅋ" "ㅌ" "ㅍ" "ㅎ";
              suffix: '. ';
            }
            @counter-style a_i_u {
              system: cyclic;
              symbols: "ア" "イ" "ウ" "エ" "オ" "カ" "キ" "ク" "ケ" "コ" "サ" "シ" "ス" "セ" "ソ";
              suffix: ' ';
            }
          `}
        />
        <Outlet />
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
      </ThemeProvider>
    )
  },
})
