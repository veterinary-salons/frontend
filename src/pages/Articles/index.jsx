import PropTypes from 'prop-types';
import ArticleCard from '../../components/ArticleCard/index';
import classes from './style.module.scss';
import SectionTitle from '../../components/SectionTitle';

const Articles = ({ dataArticle }) => (
  <section className={classes.articles}>
    <SectionTitle title='Purrfect журнал'/>
    <p className={classes.articles__paragraph}>
    Тут мы&nbsp;собираем самые полезные и&nbsp;интересные статьи про&nbsp;питомцев
    </p>
    <ul className={classes.articles__container}>
      {dataArticle.map((i) => (
        <li className={classes.articles__li} key={i.id}>
          <ArticleCard {...i} key={i.id} />
        </li>
      ))}
    </ul>
  </section>
);

Articles.propTypes = {
  dataArticle: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
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
