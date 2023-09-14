import { useState, useEffect } from 'react';
import './DetailedArticle.scss';
import { useParams } from 'react-router-dom';
import { getNews } from '../../apiCalls';

const DetailedArticle = ({setNetworkError}) => {
  const { newsTitle } = useParams();
  const [article, setArticle] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await getNews(newsTitle);
        setArticle(data.articles[0])
      } catch (error) {
        setNetworkError(error.message)
      } finally {
        setLoading(false)
      }
    })()
  }, []); 

  return (
    !loading &&
    <article className='main-articles'>
      <img className='article-image' src={`${article.urlToImage}`} />
      <div className='content-container'>
        <h2 className='article-title'>{article.title}</h2>
        <div className='data-container'>
          {article.author && <p className='article-author' >{`by: ${article.author}`}</p>}
          {article.publishedAt && <p className='article-date' >{`published: ${article.publishedAt.slice(0, 10)}`}</p>}
        </div>
        {article.content && <p className='article-content' dangerouslySetInnerHTML={{ __html: article.content}}></p>}
        <p className='more-link' >Read more <a href={`${article.url}`}  rel='noreferrer noopener' target='_blank' >here</a></p>
      </div>
    </article>
  )
}

export default DetailedArticle;