import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const Box = styled.p`
  border: 1px solid;
  padding: 1em;
  margin: 1em 0;
  text-indent: 0 !important;
`

const CreditRow = styled.span`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  &:last-of-type {
    border-bottom: none;
  }
`

const Name = styled.span`
  flex: 1;
  min-width: 0;
`

const NameLink = styled.a`
  flex: 1;
  min-width: 0;
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const Role = styled.span`
  flex: 2;
  min-width: 0;
  text-align: right;
`

const CREDITS: {
  name: {
    ja: string
    ko: string
  }
  role: {
    ja: string
    ko: string
  }
  twitter?: string
}[] = [
  {
    name: {
      ko: '혼노두가될래요',
      ja: '混老頭になりたい',
    },
    role: {
      ko: '기획·출제·프로그래밍',
      ja: '企画・出題・プログラミング',
    },
    twitter: 'honroutou_nya',
  },
  {
    name: {
      ko: '시프트',
      ja: 'シフト',
    },
    role: {
      ko: '기획·출제·디자인·프로그래밍',
      ja: '企画・出題・デザイン・プログラミング',
    },
    twitter: 'shiftpsh',
  },
  {
    name: {
      ko: 'CCW',
      ja: 'CCW',
    },
    role: {
      ko: '출제·검토',
      ja: '出題・検討',
    },
    twitter: 'cu_2x_event',
  },
  {
    name: {
      ko: 'MAXFLOW',
      ja: 'MAXFLOW',
    },
    role: {
      ko: '출제·검토',
      ja: '出題・検討',
    },
  },
  {
    name: {
      ko: '비소라',
      ja: 'VISORA',
    },
    role: {
      ko: '일본어역',
      ja: '日本語訳',
    },
  },
]

const Credits = () => {
  const { language } = useTheme()

  return (
    <Box>
      {CREDITS.map(({ name, role, twitter }) => (
        <CreditRow key={name.ja}>
          {twitter ? (
            <NameLink
              href={`https://x.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'ja' ? name.ja : name.ko} @{twitter}
            </NameLink>
          ) : (
            <Name>{language === 'ja' ? name.ja : name.ko}</Name>
          )}
          <Role>{language === 'ja' ? role.ja : role.ko}</Role>
        </CreditRow>
      ))}
    </Box>
  )
}

export default Credits
