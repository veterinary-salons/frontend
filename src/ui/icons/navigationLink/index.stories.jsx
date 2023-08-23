import NavigationLink from './index';
import imageAvatar from '../../../assets/images/icon/avatar/img-avatar.svg';

export default {
  title: 'Icons/NavigationLink',
  copmonent: NavigationLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      type: 'string',
      description:
        'Выбираем какое изображение будем получать, если ничего не передавать, то будет avatar',
      defaultValue: 'profile',
      options: ['profile', 'wishlist', 'basket'],
      control: {
        type: 'radio',
      },
    },
    counter: {
      defaultValue: 0,
      description: 'Счетчик избранных элементов для лайка и корзины',
      type: 'number',
    },
    img: {
      defaultValue: null,
      description: 'Передаем через prop изображение для аватара',
      type: 'string',
    },
    width: {
      defaultValue: '',
      description: 'Ширина иконки, пишем c px',
      type: 'string',
    },
    height: {
      defaultValue: '',
      description: 'Высота иконки, пишем c px',
      type: 'string',
    },
  },
};

const Template = (args) => <NavigationLink {...args} />;

export const AvatarDefault = Template.bind({});
AvatarDefault.args = { variant: 'profile', img: '' };

export const AvatarImage = Template.bind({});
AvatarImage.args = { variant: 'profile', img: imageAvatar };

export const WishlistEmpty = Template.bind({});
WishlistEmpty.args = { variant: 'wishlist', counter: 0 };

export const WishlistFilled = Template.bind({});
WishlistFilled.args = { variant: 'wishlist', counter: 120 };

export const BasketEmpty = Template.bind({});
BasketEmpty.args = { variant: 'basket' };

export const BasketFilled = Template.bind({});
BasketFilled.args = { variant: 'basket', counter: 40 };
