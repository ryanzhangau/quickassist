import React from 'react'

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type HAlignment = 'start' | 'center' | 'end' | 'around' | 'between'
export type VAlignment = 'start' | 'center' | 'end'
type IDictionary<T> = {
  [k in ScreenSize]?: T
}
export type ColsForRow = IDictionary<number>
export type Halign = IDictionary<HAlignment>

export interface RowProps {
  colsPerRow?: ColsForRow
  vAlign?: VAlignment
  hAlign?: Halign
}

export const generateClass = ({ colsPerRow, hAlign, vAlign }: RowProps): string => {
  let rowClass = `row`

  if (colsPerRow) {
    rowClass += Object.keys(colsPerRow).reduce(
      (classes, screenSize) =>
        (classes += ` row-cols-${screenSize}-${colsPerRow[screenSize as ScreenSize]}`),
      ''
    )
  }

  if (hAlign) {
    rowClass += Object.keys(hAlign).reduce(
      (classes, screenSize) =>
        (classes += ` justify-content-${screenSize}-${hAlign[screenSize as ScreenSize]}`),
      ''
    )
  }

  if (vAlign) {
    rowClass += ` align-items-${vAlign}`
  }

  return rowClass
}

const AnctechRow: React.FC<RowProps> = ({ children, colsPerRow, vAlign, hAlign }) => {
  return <div className={generateClass({ colsPerRow, vAlign, hAlign })}>{children}</div>
}

export default AnctechRow
