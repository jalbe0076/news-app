import './DetailedArticle.scss';

const DetailedArticle = () => {
  return (
    <article className='main-articles' key={crypto.randomUUID()} >
      <img className='article-image' src={`${urlToImage}`} />
      <h2 className='article-title'>{title}</h2>
      {author && <p className='article-author' >{`by: ${author}`}</p>}
      {publishedAt && <p className='article-date' >{`published: ${publishedAt.slice(0, 10)}`}</p>}
      {description && <p className='article-description' >{description}</p>}
      {content && <p className='article-content' >{content}</p>}
    </article>
  )
}

export default DetailedArticle;