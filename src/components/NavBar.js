import React, { Component } from 'react';

export class NavBar extends Component {
  handleClick = (e, category) => {
    e.preventDefault();           // stop page reload
    this.props.setCategory(category);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Newsera</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/Home" onClick={(e) => this.handleClick(e, "general")}>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Business" onClick={(e) => this.handleClick(e, "business")}>
                  Business
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Entertainment" onClick={(e) => this.handleClick(e, "entertainment")}>
                  Entertainment
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Health" onClick={(e) => this.handleClick(e, "health")}>
                  Health
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Science" onClick={(e) => this.handleClick(e, "science")}>
                  Science
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Sports" onClick={(e) => this.handleClick(e, "sports")}>
                  Sports
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Technology" onClick={(e) => this.handleClick(e, "technology")}>
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
