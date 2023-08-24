import InputPhone from './InputPhone';
import './InputPhone.module.scss';

export default {
  title: 'Forms/Inputs/InputPhone',
  component: InputPhone,
};

const Template = (arg) => <InputPhone {...arg} />;

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  infoInput: () => {},
};
