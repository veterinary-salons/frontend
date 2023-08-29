import LoadingIcon from './LoadingIcon';
import classes from './LoadingIcon.module.scss';

export default {
  title: 'Icons/LoadingIcon',
  component: LoadingIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер иконки загрузки',
      defaultValue: 'medium',
      options: ['medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    color: {
      type: 'string',
      description: 'Цвет иконки загрузки',
      defaultValue: 'primary',
      options: ['primary', 'reverse'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (arg) => (
    // eslint-disable-next-line react/destructuring-assignment
    <div className={`${classes.background} ${arg.color === 'primary' ? classes.primary : classes.reverse}`}>
      <LoadingIcon {...arg} />
    </div>
  );

export const mediumLoadingIcon = Template.bind({});

mediumLoadingIcon.args = {
  size: 'medium',
  color: 'primary',
};

export const BigLoadingIcon = Template.bind({});

BigLoadingIcon.args = {
  size: 'large',
  color: 'primary',
};
