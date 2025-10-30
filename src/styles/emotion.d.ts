import { Theme as TestTheme } from './theme'

declare module '@emotion/react' {
  export interface Theme extends TestTheme {}
}
