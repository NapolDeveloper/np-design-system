import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import Button from 'components/atoms/Button';

// Wrapper를 통해 버튼 간의 간격을 조절
const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
      description: '버튼의 사이즈를 설정합니다.',
    },
    btnType: {
      description: '버튼의 타입을 설정합니다.',
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
      <Button size="lg">Button</Button>
      <Button size="md">Button</Button>
      <Button size="sm">Button</Button>
    </Wrapper>
  );
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
};
