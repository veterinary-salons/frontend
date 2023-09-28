import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import classes from './style.module.scss';
import Heart from '../../ui/buttons/heart/Heart';
import ArticleContent from '../ArticleContent';

const Article = ({article, withMargins}) => {
  const {id, title, date, link, source, imgContent, isLiked} = article;
  const [isLikedArticle, setIsLikedArticle] = useState(isLiked);

  const handleClickLike = () => {
    setIsLikedArticle((state) => !state);
  };

  return (
    <section
      className={classNames(classes.article, withMargins && classes.article__margins)}
    >
      <div className={classes.article__header}>
        <h1 className={classes.article__title}>{title}</h1>
        <p className={classes['article__prop-text']}>{date}</p>
        <p className={classes['article__prop-text']}>
          Источник:&nbsp;
          <Link
            className={classes.article__link}
            to={source}
            target='_blank'
          >
            {link}
          </Link>
        </p>
      </div>

      <ArticleContent id={id} imgContent={imgContent} />

      <div className={classes.article__like}>
        <Heart
          isActive={isLikedArticle}
          onClick={handleClickLike}
        />
        <span className={classes['article__prop-text']}>
          {isLikedArticle ? 'Сохранено в избранном' : 'Сохранить в избранное'}
          </span>
      </div>
    </section>
  )
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string,
    source: PropTypes.string,
    imgContent: PropTypes.arrayOf(PropTypes.string),
    isLiked: PropTypes.bool,
  }),
  withMargins: PropTypes.bool,
};

Article.defaultProps = {
  article: {},
  withMargins: false,
};
export default Article;