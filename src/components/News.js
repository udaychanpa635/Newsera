import React, { Component } from 'react';
import NewsItems from './NewsItems';
// import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      pageSize: 20,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  async componentDidUpdate(prevProps) {
  if (prevProps.category !== this.props.category) {
    this.setState({ page: 1 }, this.fetchNews);
  }
}


fetchNews = async () => {
  try {
    this.props.setProgress(20);
    this.setState({ loading: true });

    const url = `/api/news?category=${this.props.category}&page=${this.state.page}&pageSize=${this.state.pageSize}`;

    let response = await fetch(url);
    this.props.setProgress(50);

    let data = await response.json();
    this.props.setProgress(80);

    this.setState({
      articles: data.articles || [],
      totalResults: data.totalResults || 0,
      loading: false
    });

    this.props.setProgress(100);
  } catch (error) {
    console.error("Error fetching news:", error);
    this.setState({ loading: false });
    this.props.setProgress(100);
  }
};
  handlePrevClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.fetchNews
    );
  };

  handleNextClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.fetchNews
    );
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center mb-4">
          Newsera - {this.props.category.toUpperCase()} Headlines
        </h2>

        {/* {this.state.loading && <Spinner />} */}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-4 mb-4" key={element.url}>
                <NewsItems
                  title={element.title || "No title"}
                  description={element.description || "No description available"}
                  imageUrl={
                    element.urlToImage ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>

        <p className="text-center mt-3">
          Page {this.state.page} of{" "}
          {Math.ceil(this.state.totalResults / this.state.pageSize)}
        </p>
      </div>
    );
  }
}

export default News;
