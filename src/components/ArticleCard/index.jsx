import PropTypes from 'prop-types';
import Heart from '../../ui/buttons/heart/Heart';
import classes from './style.module.scss';
import defaultImg from '../../assets/images/images/article-card/article-img.png';

const ArticleCard = ({ img, title, isActive, onClick }) => (
  <div className={classes['article-card']}>
    <img
      className={classes['article-card__img']}
      src={img || defaultImg}
      alt="фото"
    />
    <h4 className={classes['article-card__title']}>{title}</h4>
    <div className={classes['article-card__container-heart']}>
      <Heart isActive={isActive} onClick={onClick} />
    </div>
  </div>
);

ArticleCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

ArticleCard.defaultProps = {
  img: '',
  title: 'Как подружить питомцев?',
  isActive: false,
  onClick: () => {},
};

export default ArticleCard;
