import styled from '@emotion/styled'
import View from './View'

const View들여쓰기 = styled(View)`
  border: 1px solid;
  border-color: inherit;
  padding: 1em;
  margin: 1em 0;
  & > legend {
    margin: 0 auto;
    line-height: 1;
  }
  text-indent: 1em;
  white-space: pre-wrap;
`

export default View들여쓰기
