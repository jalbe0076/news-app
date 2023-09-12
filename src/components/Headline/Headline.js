import './Headline.scss';
import { useEffect, useState } from 'react';
import { getNews } from '../../apiCalls';


const Headline = ({search}) => {
  const [articles, setArticles] = useState([
    {
      author: "Chris Bumbaca, Cydney Henderson",
      content: "Cap off the first Sunday of the NFL regular season with a 'Sunday Night Football' matchup between two NFC East rivals: the Dallas Cowboys and New York Giants. \r\nThe Cowboys are coming off another dis… [+16585 chars]",
      description: "The New York Giants and Dallas Cowboys have the first Sunday primetime slot of the 2023 NFL season. We’ll bring you the latest throughout the night.",
      publishedAt: "2023-09-11T01:26:09Z",
      source: { id: 'usa-today', name: 'USA Today' },
      title: "Sunday Night Football live updates: Cowboys vs. Giants highlights, biggest plays and more - USA TODAY",
      url: "https://www.usatoday.com/story/sports/nfl/2023/09/10/cowboys-giants-sunday-night-football-live-updates/70796318007/",
      urlToImage: "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/11/USAT/70820210007-usatsi-21393073.jpg?crop=2760,1559,x0,y0&width=2760&height=1559&format=pjpg&auto=webp"
    },
    {
      author: "",
      content: "Welcome to the Week 1 grades. \r\nThe first full day of NFL action kicked off on Sunday, which might come as news to the Bengals and Steelers, because based on the way they played, it looks like someon… [+1994 chars]",
      description: "Here are the Week 1 grades for every team",
      publishedAt: "2023-09-11T00:53:00Z",
      source: { id: null, name: 'CBS Sports' },
      title: "NFL Week 1 grades: Bengals get an 'F' for blowout loss to Browns, 49ers get an 'A' for destroying Steelers - CBS Sports",
      url: "https://www.cbssports.com/nfl/news/nfl-week-1-grades-bengals-get-an-f-for-blowout-loss-to-browns-49ers-get-an-a-for-destroying-steelers/",
      urlToImage: "https://sportshub.cbsistatic.com/i/r/2023/09/11/ad7c4bd6-f574-4d39-b57f-dda8bda9188d/thumbnail/1200x675/fdf8dae85607c8f8a419eb550ded48c0/gettyimages-1672564766.jpg"
    },
    {
      author: "Jelani Scott",
      content: "Packers quarterback Jordan Love may be the new sheriff in town, but the first-year starter quickly endeared himself to cheeseheads everywhere Sunday after leading his team to another dominant win ove… [+942 chars]",
      description: "The fourth-year quarterback led Green Bay to another dominant win over its bitter NFC North rival on Sunday in his first career start.",
      publishedAt: "2023-09-11T00:51:09Z",
      source: { id: null, name: 'Sports Illustrated' },
      title: "NFL Fans Crushed the Bears After They Got Destroyed by Jordan Love-Led Packers - Sports Illustrated",
      url: "https://www.si.com/extra-mustard/2023/09/11/nfl-fans-crushed-the-bears-after-they-got-destroyed-by-jordan-love-led-packers",
      urlToImage: "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAwNzEwNjMyNDg2NDc5MjM0/usatsi_21391793-1.jpg"
    }
  ])
  const [networkError, setNetworkError] = useState(null)
  
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await getNews();
  //       setArticles(data.articles)
  //       articles.length && console.log('articles', articles)
  //     } catch (error) {
  //       setNetworkError(error.message)
  //     }
  //   })()
  // }, [])

  const headline = articles.map((article) => {
    const {title, urlToImage, description} = article;

    return (
      <article className='main-articles' >
        <img className='article-image' src={`${urlToImage}`} />
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