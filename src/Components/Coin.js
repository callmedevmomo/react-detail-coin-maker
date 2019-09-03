import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Ranking = styled.span`
  font-weight: 600;
`;

const Coin = ({ name, symbol, rank }) => (
  <Container>
    <Ranking>#{rank}</Ranking> {name}/{symbol}
  </Container>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};

export default Coin;
