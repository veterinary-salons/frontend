import CheckboxWithIcon from '.';
import '../../../../assets/styles/common.css';

export default {
  title: 'Forms/Checkboxes/CheckboxWithIcon',
  component: CheckboxWithIcon,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      description: 'Optional click handler',
    },
    checked: {
      type: 'boolean',
    },
    label: {
      description: 'Текст рядом с кнопкой',
      type: 'string',
    },
    value: {
      type: 'string',
    },
    children: {
      description: 'Иконка рядом с текстом',
    },
  },
};

const Template = (args) => <CheckboxWithIcon {...args} />;

export const PrimaryStyleCheckbox = Template.bind({});
