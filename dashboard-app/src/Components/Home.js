import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <React.Fragment>
      <h1>😊 Welcome to Homepage!</h1>
      <ul className="people">
        {["articles", "books", "people"].map((path) => {
          return (
            <li className="card">
              <Link to={"/" + path}>
                <div className="info">
                  <h2>{path.toUpperCase() + " PAGE"}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default Home;
