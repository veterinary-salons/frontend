import PropTypes from 'prop-types';
import ArticleCard from '../../components/ArticleCard/index';
import classes from './style.module.scss';

const Articles = ({ dataArticle }) => (
  <section className={classes.articles}>
    <h2 className={classes.articles__title}>Purrfect журнал</h2>
    <p className={classes.articles__paragraph}>
      Тут мы собираем самые полезные и интересные статьи про питомцев
    </p>
    <div className={classes.articles__container}>
      {dataArticle.map((i) => (
        <ArticleCard {...i} key={i.id} />
      ))}
    </div>
  </section>
);

Articles.propTypes = {
  dataArticle: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      isActive: PropTypes.bool,
    }),
  ),
};

Articles.defaultProps = {
  dataArticle: [],
};

export default Articles;
