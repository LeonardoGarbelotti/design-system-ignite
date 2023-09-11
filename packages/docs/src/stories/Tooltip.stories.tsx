import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@lggdesy-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'Tooltip example',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            backgroundColor: '$gray500',
          }}
        >
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
