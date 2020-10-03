import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import AnctechButton, { ButtonProps } from '../packages/button/src'

export default {
  title: 'Quick Assist/Button',
  component: AnctechButton,
  argTypes: {
    label: { control: 'text' },
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['tiny', 'small', 'medium', 'large'] } },
    shape: {
      control: { type: 'select', options: ['round', 'square', 'circle', 'round-conner'] }
    }
  }
} as Meta

const Template: Story<ButtonProps> = args => <AnctechButton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  label: 'Button'
}
