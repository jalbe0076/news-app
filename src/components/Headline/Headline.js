import './Headline.scss';
import { useEffect, useState } from 'react';

const Headline = ({articles, handleArticleDetails}) => {
  if (!articles || articles.length === 0) {
    return <p>No articles available.</p>;
  }

  const headline = articles.map((article) => {
    const {title, urlToImage, description} = article;

    return (
      <article className='main-articles' key={crypto.randomUUID()} onClick={() => handleArticleDetails(article)}>
        <img className='article-image' src={`${urlToImage}`} alt=''/>
        <h2 className='article-title'>{title}</h2>
        {description && <p className='article-description' >{description}</p>}
      </article>
    )
  })

  return (
    <section className='news-section' >
      {headline}
    </section>
  );
}

export default Headline;