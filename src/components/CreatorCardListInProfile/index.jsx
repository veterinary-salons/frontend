import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';

const CreatorCardListInProfile = ({ element: Component, list }) => {
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
    <div className={classes['card-wrapper']}>
      {createList}
      <Component add />
    </div>
  );
};

CreatorCardListInProfile.defaultProps = {
  list: null,
  element: null,
};

CreatorCardListInProfile.propTypes = {
  element: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};

export default CreatorCardListInProfile;
