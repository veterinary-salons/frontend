import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';
import StarsBox from '../../ui/icons/starsBox/StarsBox';
import Heart from '../../ui/buttons/heart/Heart';

const SpecialistsCard = ({
  id,
  img,
  profession,
  price,
  numReviews,
  workedWith,
  description,
  name,
  scoreReview,
}) => {
  const cn = classNames(classes['specialists-card']);

  return (
    <li className={cn}>
      <img
        src={img}
        alt="специалиста"
        className={classes['specialists-card__image']}
      />
      <div className={classes['specialists-card__content']}>
        <div className={classes['specialists-card__info']}>
          <div className={classes['specialists-card__title-container']}>
            <Link to={`${id}`} className={classes['specialists-card__profession']}>
              {profession}
            </Link>
            <Heart />
          </div>
          <p className={classes['specialists-card__price']}>
            от {price} ₽/усл
          </p>
          {workedWith && (
            <p className={classes['specialists-card__worked-with']}>
              Работает с {workedWith}
            </p>
          )}
          <p className={classes['specialists-card__description']}>
            {description}
          </p>
        </div>
        <div className={classes['specialists-card__review']}>
          <p className={classes['specialists-card__name']}>{name}</p>
          <StarsBox rating={scoreReview}/>
          <Link className={classes['specialists-card__link']} to="/">{numReviews} отзыва</Link>
        </div>
      </div>
    </li>
  );
};

SpecialistsCard.defaultProps = {
  img: 'https://avatars.mds.yandex.net/i?id=2df3575db13ac51b990cca3baa3b9c985c0bb5ce-7758910-images-thumbs&n=13',
  workedWith: null,
  description: '',
};

SpecialistsCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string,
  profession: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  workedWith: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  numReviews: PropTypes.number.isRequired,
  scoreReview: PropTypes.string.isRequired,
};

export default SpecialistsCard;
