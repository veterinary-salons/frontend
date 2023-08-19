import InputText from './InputText';
import './InputText.module.scss';

export default {
  title: 'inputs/InputText',
  component: InputText,
};

const Template = (arg) => <InputText {...arg} />;

export const Text = Template.bind({});
export const Email = Template.bind({});
export const Password = Template.bind({});
export const Disabled = Template.bind({});

Text.args = {
  type: 'text',
  placeholder: 'Tекст',
  name: 'text',
  maxLength: 30,
  minLength: 2,
  required: true,
  autoComplete: 'true',
  id: 'text',
};

Email.args = {
  type: 'email',
  placeholder: 'email',
  name: 'email',
  maxLength: 20,
  minLength: 2,
  required: true,
  autoComplete: 'true',
  infoInput: () => {},
  id: 'email',
};

Password.args = {
  type: 'password',
  placeholder: 'password',
  name: 'password',
  maxLength: 20,
  minLength: 2,
  required: true,
  autoComplete: 'true',
  infoInput: () => {},
  id: 'password',
  position: 'button-eye_position',
};

Disabled.args = {
  type: 'text',
  placeholder: 'disabled',
  name: 'input',
  disabled: true,
  id: 'disabled',
};
