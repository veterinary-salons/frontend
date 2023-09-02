import UserContacts from '.';

export default {
  title: 'Profile/UserContacts',
  component: UserContacts,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Заголовок блока',
      type: 'string',
    },
    subtitle: {
      description: 'Основные данные блока',
      type: 'string',
    },
  },
};

const Template = (args) => <UserContacts {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Адрес:',
  subtitle: 'г. Москва, ул. Гагарина, д. 6, кв. 145',
};
