import React from 'react'
import { ScreenSize, VAlignment, IDictionary } from './index'

export interface RowProps {
  colsPerRow?: IDictionary<number>
  vAlign?: VAlignment
  hAlign?: IDictionary<'start' | 'center' | 'end' | 'around' | 'between'>
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
