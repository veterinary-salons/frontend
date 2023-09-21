import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import PetCard from './petCard';

import classes from './style.module.scss';
// import { useEffect } from 'react';

const PetCardList = ({ petList }) => {
  const navigate = useNavigate();

  // useEffect(() => {

  // })

  const createPetList = petList.map(({ id, src, petName, years, months }) => (
    <PetCard
      key={id}
      id={id}
      src={src}
      title={petName}
      years={years}
      months={months}
      onClick={() => navigate(`/${id}`)}
    />
  ));

  return (
    <section className={classes.pets}>
      <h2 className={classes.pets__title}>Мои питомцы</h2>
      <div className={classes['pets__card-wrapper']}>
        {createPetList}
        <PetCard add />
      </div>
    </section>
  );
};

PetCardList.defaultProps = {
  petList: null,
};

PetCardList.propTypes = {
  petList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};

export default PetCardList;
