import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AnctechButton, { generateClass } from './index'

describe('AnctechButton component.', () => {
  let component: RenderResult, onClick: () => void

  beforeEach(() => {
    onClick = jest.fn()
    component = render(
      <AnctechButton
        label="Button"
        onClick={onClick}
        outline={false}
        data-test-id="anctech-button"
      />
    )
  })

  it('should match <AnctechButton /> snapshot.', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call onClick function when user click button.', async () => {
    const { getByTestId } = component
    const button = getByTestId('anctech-button')
    await userEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should generate "btn btn-primary btn-sm" when color is primary size is small and outline is falsy.', () => {
    expect(generateClass('sm', 'primary', false)).toBe('btn btn-primary btn-sm')
  })

  it('should generate "btn btn-outline-primary btn-sm" when color is primary size is small and outline is true.', () => {
    expect(generateClass('sm', 'primary', true)).toBe('btn btn-outline-primary btn-sm')
  })
})
