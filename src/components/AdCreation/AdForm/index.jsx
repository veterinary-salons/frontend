import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './style.module.scss';
import SectionTitle from '../../SectionTitle';
import Button from '../../../ui/buttons/originButton/Button';
import { routeNext, routeBack } from '../../../assets/constants/getRoutes';

const AdForm = ({ title, children, step, activBtn, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onClick();
    navigate(routeNext(location.pathname, step));
  };

  return (
    <form className={classes.af}>
      <SectionTitle title={title} />
      <div className={classes['af__content-wrap']}>
        {children}
        <div className={classes['af__button-wrap']}>
          <Button
            variant="outlined"
            size="medium"
            type="button"
            onClick={() => navigate(routeBack(location.pathname, step))}
          >
            Назад
          </Button>
          <Button
            variant="purple-filled"
            size="medium"
            type="submit"
            onClick={handleFormSubmit}
            active={activBtn}
          >
            Далее
          </Button>
        </div>
      </div>
    </form>
  );
};

AdForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  step: PropTypes.string,
  activBtn: PropTypes.bool,
  onClick: PropTypes.func,
};

AdForm.defaultProps = {
  title: 'Заголовок',
  children: null,
  step: '',
  activBtn: true,
  onClick: () => {},
};

export default AdForm;
