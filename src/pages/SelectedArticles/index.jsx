import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ArticleCard from '../../components/ArticleCard/index';
import NotificationMessage from '../../components/NotificationMessage/index';
import classes from './style.module.scss';

const SelectedArticles = ({ dataArticle }) => {
  const navigate = useNavigate();

  const handleNvigate = () => {
    navigate('/magazine', { relative: 'path' });
  };

  return (
    <section className={classes['selected-articles']}>
      {dataArticle.length === 0 ? (
        <NotificationMessage
          imageNumber="8"
          title="Тут пока нет интересных статей"
          text="А вы знали, что собаки, снимающиеся в голливудских фильмах, сами подписывают свои контракты – отпечатком лапы?"
          onClick={handleNvigate}
          buttonText="Читать статьи"
        />
      ) : (
        dataArticle.map((i) => <ArticleCard {...i} key={i.id} />)
      )}
    </section>
  );
};

SelectedArticles.propTypes = {
  dataArticle: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      isActive: PropTypes.bool,
    }),
  ),
};

SelectedArticles.defaultProps = {
  dataArticle: [],
};

export default SelectedArticles;
