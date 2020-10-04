import AnctechRow from './row'
import AnctechCols from './col'
export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto'
export type VAlignment = 'start' | 'center' | 'end'
export type IDictionary<T> = {
  [k in ScreenSize]?: T
}
export { AnctechRow, AnctechCols }
