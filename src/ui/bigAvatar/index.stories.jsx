import BigAvatar from '.';
import avatar from '../../assets/images/icon/avatar/img-avatar.svg';

export default {
  title: 'Avatar/BigAvatar',
  component: BigAvatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'Путь к изображению аватара',
      type: 'string',
    },
    alt: {
      description: 'Альтарнативный текст',
      type: 'string',
    },
    bigSize: {
      description: 'Наличие этого атрибута делает аватар размером 190px/190px',
      type: 'boolean',
    },
  },
};

const Template = (args) => <BigAvatar {...args} />;

export const Default = Template.bind({});

export const WithImg = Template.bind({});
WithImg.args = {
  src: avatar,
};

export const Big = Template.bind({});
Big.args = {
  bigSize: true,
};
