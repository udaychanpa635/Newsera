// api/news.js
export default async function handler(req, res) {
  const { category = "general", page = 1 } = req.query;
  const pageSize = 20;
  const apiKey = process.env.GNEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "GNEWS_API_KEY not set" });
  }

  try {
    const url = `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=en&country=in&max=${pageSize}&page=${page}&apikey=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch news" });
  }
}
