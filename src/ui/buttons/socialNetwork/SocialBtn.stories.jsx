import SocialBtn from './SocialBtn';
// TODO: есть дублирующая папка icon, есть icon с размерами. Не понятно какую надо оставить. Посмотреть так по всем файлам.
import imgY from '../../../assets/images/icon/btns-social/yandex.svg';
import imgVk from '../../../assets/images/icon/btns-social/vk.svg';

export default {
  title: 'Buttons/Social',
  component: SocialBtn,
};

const Template = (arg) => <SocialBtn {...arg} />;

export const Yandex = Template.bind({});
export const Vk = Template.bind({});

Yandex.args = {
  img: imgY,
};

Vk.args = {
  img: imgVk,
};
