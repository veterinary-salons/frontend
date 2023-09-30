import ScheduleButton from '.';
import './style.module.scss';

export default {
  title: 'Buttons/ScheduleButton',
  component: ScheduleButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      variant: 'Вид кнопки',
      type: 'string',
      defaultValue: 'dayMonth',
      options: ['time', 'dayMonth', 'arrow'],
      control: {
        type: 'radio',
      },
    },
    action: {
      type: 'boolean',
      description: 'Активность кнопки',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    disabled: {
      type: 'boolean',
      description: 'Отключение кнопки',
      defaultValue: false,
    },
    time: {
      type: 'string',
      description: 'Время',
      defaultValue: '11:00',
    },
    dayWeek: {
      description: 'День недели',
      defaultValue: 'Пт',
    },
    dayMonth: {
      description: 'Число',
      defaultValue: '1 сент',
    },
  },
};

const Template = (arg) => <ScheduleButton {...arg} />;

export const ButtonTime = Template.bind({});
ButtonTime.args = {
  disabled: false,
  action: false,
  variant: 'time',
  time: '11:00',
};

export const ButtonMonth = Template.bind({});
ButtonMonth.args = {
  disabled: false,
  variant: 'dayMonth',
  dayWeek: 'Пт',
  dayMonth: '1 сент',
};

export const ButtonArrow = Template.bind({});
ButtonArrow.args = {
  variant: 'arrow',
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  disabled: true,
  variant: 'dayMonth',
  dayWeek: 'Пт',
  dayMonth: '1 сент',
};
