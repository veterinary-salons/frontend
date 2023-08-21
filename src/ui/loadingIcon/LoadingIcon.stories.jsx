import LoadingIcon from './LoadingIcon';
import classes from './LoadingIcon.module.scss';

export default {
  title: 'UI/Elements/LoadingIcon',
  component: LoadingIcon,
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер иконки загрузки',
      defaultValue: 'small',
      options: ['small', 'large'],
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

export const SmallLoadingIcon = Template.bind({});

SmallLoadingIcon.args = {
  size: 'small',
  color: 'primary',
};

export const BigLoadingIcon = Template.bind({});

BigLoadingIcon.args = {
  size: 'large',
  color: 'primary',
};
