export const fetchArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_KEY}`)
    const articles = await res.json();
    console.log(articles);
    return articles
}