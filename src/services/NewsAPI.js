export const fetchArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2021-11-02&to=2021-11-02&sortBy=popularity&apiKey=${process.env.NEWS_KEY}`)
    const articles = await res.json();
    return articles.articles
}


