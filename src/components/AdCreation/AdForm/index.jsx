import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './style.module.scss';
import SectionTitle from '../../SectionTitle';
import Button from '../../../ui/buttons/originButton/Button';

const AdForm = ({ title, children, step }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.af}>
      <SectionTitle title={title} />
      <div className={classes['af__content-wrap']}>
        {children}
        <div className={classes['af__button-wrap']}>
          <Button
            variant="outlined"
            size="medium"
            type="button"
            onClick={() => navigate(-1)}
          >
            Назад
          </Button>
          <Button
            variant="purple-filled"
            size="medium"
            type="button"
            onClick={() => navigate(`/adform/${step}`)}
          >
            Далее
          </Button>
        </div>
      </div>
    </div>
  );
};

AdForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  step: PropTypes.string,
};

AdForm.defaultProps = {
  title: 'Заголовок',
  children: null,
  step: ''
};

export default AdForm;
