export const getNews = async (search) => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&country=us&pageSize=10&q=${search}`)
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

