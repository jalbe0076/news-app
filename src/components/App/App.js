import './App.scss';
import Headline from '../Headline/Headline';
import Navigation from '../Navigation/Navigation';
import BadRoute from '../BadRoute/BadRoute';
import { useState, useEffect } from 'react';
import { getNews } from '../../apiCalls';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [currentSearch, setCurrentSearch] = useState('')
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([])
  const [networkError, setNetworkError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await getNews('');
        setArticles(data.articles)
      } catch (error) {
        setNetworkError(error.message)
      } finally {
        setLoading(false)
      }
    })()
  }, []);

  const handleSearch = (search) => {
    setCurrentSearch(search);
    setLoading(true);
    (async () => {
      try {
        const data = await getNews(search);
        setArticles(data.articles);
      } catch (error) {
        setNetworkError(error.message);
      } finally {
        setLoading(false)
        navigate('/')
      }
    })();
  }

  const returnHome = () => {
    navigate('/');
  }
 
  return (
    <div className='app'>
      <Navigation handleSearch={handleSearch} returnHome={returnHome} />
      <main className='main-section' >
        {!networkError ?
          <Routes>
            <Route path='/' element={loading ? (<h2 className='error-messages'>Loading articles...</h2>)
              : articles.length ? 
                (<Headline articles={articles} /> )
              : (<h2 className='error-messages'>No available articles {currentSearch && `for ${currentSearch}`}</h2>)
              }
            />
            <Route path={`/:newsTitle`} element={<DetailedArticle setLoading={setLoading} setNetworkError={setNetworkError} />} />
            <Route path='*' element={<BadRoute />}/>
          </Routes> 
        : <h2 className='error-messages' >{networkError}</h2>
        }
      </main>
    </div>
  )
}

export default App;
