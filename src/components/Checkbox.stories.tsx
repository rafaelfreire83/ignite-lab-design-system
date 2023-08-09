import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps} from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <label className="flex items-center text-gray-400 text-xs gap-3 cursor-pointer">
          {Story()}
          Accept terms and conditions.
        </label>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}