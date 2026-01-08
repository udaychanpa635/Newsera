import React, { Component } from 'react';
import NewsItems from './NewsItems';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch("/api/news.js");
      let data = await response.json();

      this.setState({
        articles: data.articles || [],
        loading: false
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center mb-4">Newsera - Top Headlines</h2>

        {this.state.loading && (
          <h4 className="text-center">Loading...</h4>
        )}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-4 mb-4" key={element.url}>
                <NewsItems
                  title={element.title || "No title"}
                  description={
                    element.description || "No description available"
                  }
                  imageUrl={
                    element.urlToImage ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  newsUrl={element.url}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default News;
