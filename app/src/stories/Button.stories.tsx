import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import Button from 'components/atoms/Button';

// Wrapper를 통해 버튼 간의 간격을 조절
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      control: '',
      action: 'clicked',
    },
    size: {
      description: 'ss',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Size = () => {
  return (
    <Wrapper>
      <Button size="lg">lg</Button>
      <Button size="md">md</Button>
      <Button size="sm">sm</Button>
    </Wrapper>
  );
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
};
