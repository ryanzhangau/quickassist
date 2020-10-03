/** @format */

import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import 'bootstrap/dist/css/bootstrap.css'

import AnctechButton, { ButtonProps } from '../packages/button/src'

export default {
  title: 'Quick Assist/Button',
  component: AnctechButton,
  argTypes: {
    label: { control: 'text' },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
      }
    },
    disabled: { control: 'boolean' }
  }
} as Meta

const NormalButton: Story<ButtonProps> = args => <AnctechButton {...args} />

export const Normal = NormalButton.bind({})
Normal.args = {
  label: 'Button',
  size: 'md',
  color: 'primary'
}

const HollowButton: Story<ButtonProps> = args => <AnctechButton {...args} outline={true} />

export const Hollow = HollowButton.bind({})
Hollow.args = {
  label: 'Button',
  size: 'md',
  color: 'primary'
}
