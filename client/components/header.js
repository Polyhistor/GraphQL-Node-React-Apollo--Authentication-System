import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import query from "../queries/currentUser";

const Header = props => {
  const renderButtons = () => {
    const { loading, user } = props.data;

    // handling various cases
    if (loading) {
      return <div />;
    }

    if (user) {
      return <div>Logout</div>;
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default graphql(query)(Header);
