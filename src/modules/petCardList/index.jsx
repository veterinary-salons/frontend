import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useNavigate, Link } from 'react-router-dom';
import PetCard from './petCard';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

const PetCardList = ({ petList }) => {
  const navigate = useNavigate();

  const createPetList = petList
    ? petList.map(({ id, src, petName, years, months }) => (
        <PetCard
          key={id}
          id={id}
          src={src}
          title={petName}
          years={years}
          months={months}
          onClick={() => navigate(`/${id}`)}
        />
      ))
    : null;

  return petList || petList?.length === 0 ? (
    <div className={classes['pets__card-wrapper']}>
      {createPetList}
      <PetCard add />
    </div>
  ) : (
    <div className={classes['pets__no-pet']}>
      <p className={classes['pets__title-no-pet']}>У вас пока нет питомцев</p>
      <p className={classes['pets__subtitle-no-pet']}>
        Но они, наверняка, есть.
      </p>
      <Link to="add-pet">
        <Button shape="round" size="small" variant="add" />
      </Link>
      <p
        className={classNames(
          classes['pets__subtitle-no-pet'],
          classes['pets__subtitle-no-pet_black'],
        )}
      >
        Добавить информацию
      </p>
    </div>
  );
};

PetCardList.defaultProps = {
  petList: null,
};

PetCardList.propTypes = {
  petList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};

export default PetCardList;
