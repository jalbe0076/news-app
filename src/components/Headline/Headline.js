import './Headline.scss';
import { useEffect, useState } from 'react';
import { getNews } from '../../apiCalls';


const Headline = ({search}) => {
  const [articles, setArticles] = useState([])
  const [networkError, setNetworkError] = useState(null)
  
  useEffect(() => {
    (async () => {
      try {
        const data = await getNews();
        setArticles(data.articles)
        articles.length && console.log('articles', articles)
      } catch (error) {
        setNetworkError(error.message)
      }
    })()
  }, [])

  return (
    <section>

    </section>
  );
}

export default Headline;