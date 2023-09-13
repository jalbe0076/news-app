import './DetailedArticle.scss';

const DetailedArticle = ({article}) => {
  const {title, urlToImage, author, content, publishedAt, url} = article;

  return (
    <article className='main-articles'>
      <img className='article-image' src={`${urlToImage}`} />
      <div className='content-container'>
        <h2 className='article-title'>{title}</h2>
        <div className='data-container'>
          {author && <p className='article-author' >{`by: ${author}`}</p>}
          {publishedAt && <p className='article-date' >{`published: ${publishedAt.slice(0, 10)}`}</p>}
        </div>
        {content && <p className='article-content' dangerouslySetInnerHTML={{ __html: content}}></p>}
        <p className='more-link' >Read more <a href={`${url}`}  rel='noreferrer noopener' target='_blank' >here</a></p>
      </div>
    </article>
  )
}

export default DetailedArticle;