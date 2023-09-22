import {
  arrayAnimals,
  arrayFilterList,
  arrayTimeList,
} from '../../../assets/constants/constants';
import Dropdown from './Dropdown';
import './Dropdown.module.scss';

export default {
  title: 'Forms/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    width: {
      type: 'string',
      description: 'Ширина компонента',
      defaultValue: '119px',
    },
    array: {
      defaultValue: [],
      description: 'Массив с данными',
      type: 'array',
    },
    getDropdown: {
      defaultValue: () => {},
      description: 'Получение данных Dropdown',
      type: 'func',
    },
    disabled: {
      defaultValue: false,
      description: 'Получение данных Dropdown',
      type: 'bool',
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (arg) => <Dropdown {...arg} />;

export const Default = Template.bind({});
Default.args = {
  width: '119px',
  array: arrayAnimals,
  defaultValue: () => {},
  disabled: false,
};
export const FilterList = Template.bind({});
FilterList.args = {
  width: '310px',
  array: arrayFilterList,
  defaultValue: () => {},
  disabled: false,
};
export const TimeList = Template.bind({});
TimeList.args = {
  width: '120px',
  array: arrayTimeList,
  defaultValue: () => {},
  disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
  width: '120px',
  array: arrayTimeList,
  defaultValue: () => {},
  disabled: true,
};
