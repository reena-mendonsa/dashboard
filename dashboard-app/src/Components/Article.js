import React from "react";
import { Link, withRouter } from "react-router-dom";

function Article(props) {
  return (
    <React.Fragment>
      <Link to="/articles">
        <h4 style={{ marginBottom: "1rem" }}>
          <span role="img" aria-label="Finger Point">
            👈{" "}
          </span>
          Go back to articles
        </h4>
      </Link>
      <h1>
        The slug of the article is::: <b>{props.match.params.slug}</b>!
      </h1>
    </React.Fragment>
  );
}

export default withRouter(Article);
