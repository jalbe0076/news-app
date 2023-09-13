import './Navigation.scss';
import Search from '../Search/Search';
import { useLocation, Link } from 'react-router-dom';

const Navigation = ({handleSearch, returnHome}) => {
  const location = useLocation()
  const arrowSvg = (
    <svg className='arrow-icon' stroke='black' height="24" viewBox="0 0 60 80" width="40">
      <line className="line top" x1="10" x2="40" y1="40" y2="15" strokeWidth="8" strokeLinecap="round"/>
      <line className="line middle" x1="90" x2="10" y1="40" y2="40" strokeWidth="8" strokeLinecap="round" />
      <line className="line bottom" x1="40" x2="10" y1="65" y2="40" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );

  return (
    <header>
      <div className='main-header-container' >
        <Link to='/' className='nav-title'><h1>News App</h1></Link>
        {(location.pathname !== '/') && <button onClick={returnHome}>{arrowSvg}</button>}
      </div>
      <Search handleSearch={handleSearch}/>
    </header>
  );
}

export default Navigation;