import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Heart from '../../ui/buttons/heart/Heart';
import classes from './style.module.scss';
import defaultImg from '../../assets/images/images/article-card/1.png';

const ArticleCard = ({ id, imgCover, title, isLiked }) => {
  const [isLikedCard, setIsLikedCard] = useState(isLiked);

  const handleClickLike = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    setIsLikedCard((state) => !state);
  };

  return (
    <Link
      to={`/magazine/${id}`}
      className={classes['article-card']}
    >
      <img
        className={classes['article-card__img']}
        src={imgCover || defaultImg}
        alt="статьи"
      />
      <div className={classes['article-card__container']}>
        <h4 className={classes['article-card__title']}>{title}</h4>
        <div className={classes['article-card__container-heart']}>
          <Heart isActive={isLikedCard} onClick={handleClickLike} />
        </div>
      </div>
    </Link>
  );
};

ArticleCard.propTypes = {
  id: PropTypes.string,
  imgCover: PropTypes.string,
  title: PropTypes.string,
  isLiked: PropTypes.bool,
};

ArticleCard.defaultProps = {
  id: '',
  imgCover: '',
  title: 'Как подружить питомцев?',
  isLiked: false,
};

export default ArticleCard;
