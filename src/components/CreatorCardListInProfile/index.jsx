import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';

const CreatorCardListInProfile = ({ element: Component, list, isCustomer }) => {
  const navigate = useNavigate();

  const createList = list
    ? list.map((item) => (
        <Component
          key={item.id}
          {...item}
          onClick={() => navigate(`/${item.id}`)}
        />
      ))
    : null;

  return (
    <div
      className={classNames(classes['card-wrapper'], {
        [classes['card-wrapper_carousel']]: !isCustomer,
      })}
    >
      {createList}
      <Component add />
    </div>
  );
};

CreatorCardListInProfile.defaultProps = {
  list: null,
  element: null,
  isCustomer: false,
};

CreatorCardListInProfile.propTypes = {
  element: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  isCustomer: PropTypes.bool,
};

export default CreatorCardListInProfile;
