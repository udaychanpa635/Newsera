import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date } = this.props;

    const fallbackImage =
      "https://via.placeholder.com/600x350?text=No+Image";

    return (
      <div className="news-card">
        <div className="image-wrapper">
          <img
            src={imageUrl || fallbackImage}
            alt={title || "News"}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
          />
        </div>

        <div className="news-content">
          <h5>{title ? title.slice(0, 90) : "Untitled News"}</h5>

          <p>
            {description
              ? description.slice(0, 130)
              : "No description available."}
          </p>

          <div className="news-footer">
            <span>
              {author || "Unknown"} • {new Date(date).toLocaleDateString()}
            </span>

            <a href={newsUrl} target="_blank" rel="noreferrer">
              Read →
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
