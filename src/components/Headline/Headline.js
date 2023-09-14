import { Link } from 'react-router-dom';
import './Headline.scss';

const Headline = ({articles}) => {
  if (!articles || articles.length === 0) {
    return <p>No articles available.</p>;
  }

  const headline = articles.map((article) => {
    const {title, urlToImage, description} = article;
    article.id = crypto.randomUUID()

    return (
      <Link to={`/article/${article.title}`} className='main-articles' key={article.id}>
        <img className='article-image' src={`${urlToImage}`} alt=''/>
        <div className='content-container'>
          <h2 className='article-title'>{title}</h2>
          {description && <p className='article-description' dangerouslySetInnerHTML={{ __html: description }}></p>}
        </div>
      </Link>
    )
  })

  return (
    <section className='news-section' >
      {headline}
    </section>
  );
}

export default Headline;