export default async function handler(req, res) {
  const { country = 'us', category = 'general', page = 1, pageSize = 20 } = req.query;
  const apiKey = process.env.NEWS_API_KEY;  // must match env var in Vercel

  if (!apiKey) {
    return res.status(500).json({ error: 'NEWS_API_KEY not set' });
  }

  try {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'ok') {
      return res.status(500).json({ error: data.message });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
