import PropTypes from 'prop-types';
import style from './SpecialistCard.module.scss';
import imgGroomer from '../../../assets/images/icon/specialists/groomers.svg';
// import imgVets from '../../../assets/images/icon/specialists/vets.svg';
// mport imgPetSitters from '../../../assets/images/icon/specialists/pet-sitters.svg';
// import imgDogHandlers from '../../../assets/images/icon/specialists/dog-handlers.svg';

const SpecialistCard = ({ color, title, children}) => (
    <div className={style.card}>
      <div className={style[`card__background_${color}`]}>
        <img
          className={style.card__img}
          alt={title}
          src={children}
        />
        <h3 className={style.card__header}>{title}</h3>
      </div>
    </div>
)


SpecialistCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
};

SpecialistCard.defaultProps = {
  color: 'blue',
  title: 'Грумеры',
  children: imgGroomer,
};

export default SpecialistCard;
