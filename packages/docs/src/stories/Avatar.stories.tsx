import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@lggdesy-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/LeonardoGarbelotti.png',
    alt: 'Leonardo Garbelotti',
  },
  argTypes: {
    src: {
      description: 'Image source',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'No profile image',
  },
  parameters: {
    args: {
      src: undefined,
    },
    docs: {
      description: {
        story: 'Exemplo do componente com um placeholder de Fallback',
      },
    },
  },
}
