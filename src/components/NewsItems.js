import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    const {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date
    } = this.props;

    const fallbackImage =
      "https://via.placeholder.com/400x220?text=No+Image";

    return (
      <div className="card h-100 shadow-sm">
        <img
          src={imageUrl ? imageUrl : fallbackImage}
          className="card-img-top"
          alt={title || "News"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            {title ? title.slice(0, 80) : "Untitled News"}
          </h5>

          <p className="card-text text-muted">
            {description
              ? description.slice(0, 120)
              : "No description available."}
          </p>
          <p class="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small>

          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark mt-auto"
          >
            Read More →
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItems;
