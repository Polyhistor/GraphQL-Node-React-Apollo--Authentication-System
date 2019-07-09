import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import gql from "graphql-tag";

import query from "../queries/currentUser";

const Header = props => {
  const onLogoutClick = () => {
    props.mutate({
      // rerun the query so the component rerenders
      refetchQueries: [{ query: query }]
    });
  };

  const renderButtons = () => {
    const { loading, user } = props.data;

    // handling various cases
    if (loading) {
      return <div />;
    }

    if (user) {
      return (
        <li>
          <a onClick={onLogoutClick.bind(this)}>logout</a>
        </li>
      );
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

const mutation = gql`
  mutation {
    logout {
      id
      email
    }
  }
`;

export default graphql(mutation)(graphql(query)(Header));
