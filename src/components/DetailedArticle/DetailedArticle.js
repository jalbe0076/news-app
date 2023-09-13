import './DetailedArticle.scss';

const DetailedArticle = ({article}) => {
  const {title, urlToImage, author, content, publishedAt} = article;
  
  return (
    <article className='main-articles'>
      <img className='article-image' src={`${urlToImage}`} />
      <h2 className='article-title'>{title}</h2>
      {author && <p className='article-author' >{`by: ${author}`}</p>}
      {publishedAt && <p className='article-date' >{`published: ${publishedAt.slice(0, 10)}`}</p>}
      {content && <p className='article-content' >{content}</p>}
    </article>
  )
}

export default DetailedArticle;