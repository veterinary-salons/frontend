import CrossIcon from './CrossIcon';
import classes from './CrossIcon.module.scss';

export default {
  title: 'UI/Elements/CrossIcon',
  component: CrossIcon,
  tags: ['autodocs'],
  argTypes: {
    color: {
      type: 'string',
      description: 'Цвет иконки крестика',
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
      <CrossIcon {...arg} />
    </div>
  );

export const CrossIconPrimary = Template.bind({});

CrossIconPrimary.args = {
  color: 'primary',
};

export const CrossIconReverse = Template.bind({});

CrossIconReverse.args = {
  color: 'reverse',
};
