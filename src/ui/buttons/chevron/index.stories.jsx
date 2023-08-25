import ChevronButton from './index';

export default {
  title: 'Buttons/ChevronButton',
  component: ChevronButton,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      description: 'Направление стрелы',
      type: 'string',
      defaultValue: 'up',
      options: ['up', 'down'],
      control: {
        type: 'radio',
      },
    },
    onClick: {
      description: 'Обработчик события клика',
      type: {
        name: 'function',
      },
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
};

const Template = (args) => <ChevronButton {...args} />;

export const Up = Template.bind({});
Up.args = {
  direction: 'up',
};

export const Down = Template.bind({});
Down.args = {
  direction: 'down',
};
