import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 10px 0px;
`;

const MarketLink = styled.a`
  text-decoration-line: underline;
`;

const Market = ({ exchange_name, market_url }) => (
  <MarketLink href={market_url !== null ? market_url : "/"}>
    <Container>{exchange_name}</Container>
  </MarketLink>
);

Market.propTypes = {
  exchange_name: PropTypes.string.isRequired,
  market_url: PropTypes.string
};
export default Market;
