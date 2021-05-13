import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
  background-color: ${(props) => (props.current ? "#d1d252" : "")};
`;

export default withRouter(({ location: { pathname } }) => (
  <header>
    <List>
      <Item current={pathname === "/"}>
        <Link to="/">Prices</Link>
      </Item>
      <Item current={pathname === "/exchanges"}>
        <Link to="/exchanges">Exchanges</Link>
      </Item>
      <Item current={pathname === "/coins"}>
        <Link to="/coins">Coins</Link>
      </Item>
    </List>
  </header>
));
