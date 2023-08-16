import Avatar from './Avatar';
import img from '../../assets/image/icon40/ImgAvatar.svg';

export default {
  title: 'icon 40px/Avatar',
  component: Avatar,
};

const style = { width: '2.5rem', height: '2.5rem' };

const Template = (arg) => <Avatar {...arg} />;

export const Default = Template.bind({});

export const ImageAvatar = Template.bind({});

Default.args = {
  img: '',
  style,
};

ImageAvatar.args = {
  img,
  style,
};
