import React from 'react'
import { render } from '@testing-library/react'
import AnctechCols, { generateClass } from './col'
import { IDictionary, VAlignment } from './index'

describe('AnctechCols component', () => {
  it('should match <AnctechCols /> snapshot', () => {
    const { asFragment } = render(<AnctechCols>test</AnctechCols>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should generate col-* classes when colSize is number', () => {
    const colSize = 3
    expect(generateClass({ colSize })).toBe('col-3')
  })

  it('should generate col-<screenSize>-* classes when colSize is object', () => {
    const colSize: IDictionary<string | number> = { xs: 3, sm: 4, lg: 'auto' }
    expect(generateClass({ colSize })).toBe(' col-xs-3 col-sm-4 col-lg-auto')
  })

  it('should generate offset-<screenSize>-* classes when offset is provided', () => {
    const offset: IDictionary<string | number> = { xs: 3, sm: 4, lg: 'auto' }
    expect(generateClass({ offset })).toBe('col offset-xs-3 offset-sm-4 offset-lg-auto')
  })

  it('should generate align-self-* classes when selfAlign is provided', () => {
    const selfAlign: VAlignment = 'start'
    expect(generateClass({ selfAlign })).toBe('col align-self-start')
  })
})
