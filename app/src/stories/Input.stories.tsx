import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import Input from 'components/atoms/Input';

// Wrapper를 통해 버튼 간의 간격을 조절
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: 'Username',
  },
};

export const Disabled: Story = {
  args: {
    type: 'number',
    disabled: true,
  },
};
