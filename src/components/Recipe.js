import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipe extends Component {
  render() {
    const {
      publisher,
      title,
      source_url,
      image_url,
      recipe_id
    } = this.props.recipe;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image_url}
            className="img-card-top"
            style={{ height: "14rem" }}
            alt="recipe"
          />
          <div className="card-body tex-capitalize">{title}</div>
          <div className="text-warning text-capitalize">
            provided by {publisher}
          </div>
          <div className="card-footer">
            <Link
              to={`/recipes/${recipe_id}`}
              className="btn btn-primary text-capitalize"
            >
              details
            </Link>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mx-2 text-capitalize"
            >
              recipe url
            </a>
          </div>
        </div>
      </div>
    );
  }
}
