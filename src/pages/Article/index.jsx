import { useParams } from 'react-router-dom/dist';
import { dataArticlePage } from '../../assets/constants/dataArticles';
import Article from '../../components/Article';

const ArticlePage = () => {
  const params = useParams();
  const article = dataArticlePage.find(
    ({id}) => id === params.id,
  );

  return (
    <Article article={article} withMargins />
  );
};

export default ArticlePage;
