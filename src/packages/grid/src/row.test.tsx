import React from 'react'
import { render } from '@testing-library/react'
import AnctechRow, { generateClass, ColsForRow, Halign, VAlignment } from './row'

describe('AnctechRow component', () => {
  it('should match <AnctechRow /> snapshot', () => {
    const { asFragment } = render(<AnctechRow>test</AnctechRow>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should generate cols per row class when colsPerRow is provided', () => {
    const colsPerRow: ColsForRow = { xs: 3, lg: 4 }
    expect(generateClass({ colsPerRow })).toBe('row row-cols-xs-3 row-cols-lg-4')
  })

  it('should generate horizontal aligment class when hAlign is proived', () => {
    const hAlign: Halign = { xs: 'start', lg: 'end' }
    expect(generateClass({ hAlign })).toBe('row justify-content-xs-start justify-content-lg-end')
  })

  it('should generate vertical alignment class when vAlgin is provide', () => {
    const vAlign: VAlignment = 'start'
    expect(generateClass({ vAlign })).toBe('row align-items-start')
  })
})
