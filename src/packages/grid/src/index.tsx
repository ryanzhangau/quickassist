import AnctechRow, { RowProps } from './row'
import AnctechCols, { ColsProps } from './col'
export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto'
export type VAlignment = 'start' | 'center' | 'end'
export type IDictionary<T> = {
  [k in ScreenSize]?: T
}
export { AnctechRow, AnctechCols }
export type { RowProps, ColsProps }
