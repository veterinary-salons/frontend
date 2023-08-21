import {
  arrayAnimals,
  arrayFilterList,
  arrayTimeList,
} from '../../assets/constants/constants';
import Dropdown from './Dropdown';
import './Dropdown.module.scss';

export default {
  title: 'Dropdown/Dropdown',
  component: Dropdown,
};

const Template = (arg) => <Dropdown {...arg} />;

export const Default = Template.bind({});
export const FilterList = Template.bind({});
export const TimeList = Template.bind({});

Default.args = {
  width: '500px',
  array: arrayAnimals,
};

FilterList.args = {
  width: '310px',
  array: arrayFilterList,
};

TimeList.args = {
  width: '120px',
  array: arrayTimeList,
};
