export const getNews = async () => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.NEWS_API_KEY}&country=us&pageSize=10`)
  const data = await handleErrors(response)
  return data;
}

const handleErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(`HTTP Error: ${response.code} ${response.message}`);
  }
}

