import PropTypes from 'prop-types';
import { useState } from 'react';
import Heart from '../../ui/buttons/heart/Heart';
import classes from './style.module.scss';
import defaultImg from '../../assets/images/images/article-card/article-img.png';

const ArticleCard = ({ img, title, isActive }) => {
  const [isLike, setIsLike] = useState(isActive);

  const handleClickLike = () => {
    setIsLike((state) => !state);
  };

  return (
    <div className={classes['article-card']}>
      <img
        className={classes['article-card__img']}
        src={img || defaultImg}
        alt="статьи"
      />
      <div className={classes['article-card__container']}>
        <h4 className={classes['article-card__title']}>{title}</h4>
        <div className={classes['article-card__container-heart']}>
          <Heart isActive={isLike} onClick={handleClickLike} />
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool,
};

ArticleCard.defaultProps = {
  img: '',
  title: 'Как подружить питомцев?',
  isActive: false,
};

export default ArticleCard;
