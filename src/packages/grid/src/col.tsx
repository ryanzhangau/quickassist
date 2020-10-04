import React from 'react'
import { IDictionary, VAlignment, ScreenSize } from './index'

export interface ColsProps {
  colSize?: IDictionary<string | number> | number
  offset?: IDictionary<string | number>
  selfAlign?: VAlignment
}

export const generateClass = ({ colSize, selfAlign, offset }: ColsProps): string => {
  let colClass: string = 'col'
  if (colSize) {
    if (typeof colSize === 'number') {
      colClass = `col-${colSize}`
    } else {
      colClass = Object.keys(colSize).reduce(
        (classes, screenSize) =>
          (classes += ` col-${screenSize}-${colSize[screenSize as ScreenSize]}`),
        ''
      )
    }
  }

  if (offset) {
    colClass += Object.keys(offset).reduce(
      (classes, screenSize) =>
        (classes += ` offset-${screenSize}-${offset[screenSize as ScreenSize]}`),
      ''
    )
  }

  if (selfAlign) {
    colClass += ` align-self-${selfAlign}`
  }
  return colClass
}

const AnctechCols: React.FC<ColsProps> = ({ children, colSize, selfAlign, offset }) => {
  return <div className={generateClass({ colSize, selfAlign, offset })}>{children}</div>
}

export default AnctechCols
