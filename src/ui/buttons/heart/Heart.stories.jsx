import { useState } from 'react';
import Heart from './Heart';

export default {
  title: 'Buttons/Heart',
  component: Heart,
  tags: ['autodocs'],
  argTypes: {
    isActive: {
      type: Boolean,
      description: 'Состояние активности',
      defaultValue: false,
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args) => (
  <div style={{ backgroundColor: '#D4D4D4', width: '40px' }}>
    <Heart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

// В компоненте-истории используем useState для управления состоянием
export const WithState = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHeartClick = () => {
    setIsActive((state) => !state);
  };

  return (
    <div style={{ backgroundColor: '#D4D4D4', width: '40px' }}>
      <Heart isActive={isActive} onClick={handleHeartClick} />
    </div>
  );
};
