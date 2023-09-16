import PropTypes from 'prop-types';
import classes from './style.module.scss';
import SectionTitle from '../../SectionTitle';
import Button from '../../../ui/buttons/originButton/Button';

const AdForm = ({title, children }) => (
  <div className={classes.af}>
    <SectionTitle title={title} />
    {children}
    <div className={classes['af__button-wrap']}>
      <Button variant="outlined" size="medium" type="button">
        Назад
      </Button>
      <Button variant="purple-filled" size="medium" type="submit">
        Далее
      </Button>
    </div>
  </div>
);

AdForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

AdForm.defaultProps = {
  title: 'Какую услугу вы хотите оказать?',
  children: null,
};

export default AdForm;
