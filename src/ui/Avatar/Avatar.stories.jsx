import Avatar from './Avatar';
import img from '../../assets/image/icon/avatar/img-avatar.svg';

export default {
  title: 'icon 40px/Avatar',
  component: Avatar,
};

const style = { width: '2.5rem', height: '2.5rem' };

const Template = (arg) => <Avatar {...arg} />;

export const Default = Template.bind({});

export const AddImgAvatar = Template.bind({});

Default.args = {
  img: '',
  style,
};

AddImgAvatar.args = {
  img,
  style,
};
