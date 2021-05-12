import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <ul>
      <li>
        <Link to="/prices">
          <strong>Prices</strong>
        </Link>
      </li>
      <li>
        <Link to="/exchanges">
          <strong>Exchanges</strong>
        </Link>
      </li>
      <li>
        <Link to="/coins">
          <strong>coins</strong>
        </Link>
      </li>
    </ul>
  </header>
);
