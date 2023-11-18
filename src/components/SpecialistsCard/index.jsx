import { Link } from 'react-router-dom';
import { useState, useLayoutEffect, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';
import StarsBox from '../../ui/icons/starsBox/StarsBox';
import Heart from '../../ui/buttons/heart/Heart';

const SpecialistsCard = ({
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
  const [width, setWidth] = useState('');
  const [iconsCount, setIconsCount] = useState(5);
  const [reviewText, setReviewText] = useState(`${numReviews} отзыва`);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  useEffect(() => {
    if(width < 760) {
      setIconsCount(1);
      setReviewText(`(${numReviews})`)
    } else if(width < 990) {
      setIconsCount(5);
      setReviewText(`${numReviews} отзыва`)
    } else if(width < 1120) {
      setIconsCount(1);
      setReviewText(`${numReviews} отзыва`)
    } else {
      setIconsCount(5);
      setReviewText(`${numReviews} отзыва`)
    }
    // eslint-disable-next-line
  }, [width]);

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
            <p className={classes['specialists-card__profession']}>
              {profession}
            </p>
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
          <div className={classes['specialists-card__rating']}>
            <StarsBox rating={scoreReview} iconsCount={iconsCount} />
            <Link className={classes['specialists-card__link']} to="/">
              {reviewText}
            </Link>
          </div>
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
