import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 10px 0px;
`;

const MarketLink = styled.a`
  text-decoration-line: underline;
`;

const Txt = styled.span`
  padding-left: 15px;
  font-weight: 600;
  font-size: 15px;
  color: #eb4d4b;
  text-decoration-line: line-through;
`;

const Market = ({ exchange_name, market_url }) => (
  <div>
    {market_url !== null ? (
      <MarketLink href={market_url}>
        <Container>{exchange_name}</Container>
      </MarketLink>
    ) : (
      <Container>
        {exchange_name}
        <Txt>Not allowed</Txt>
      </Container>
    )}
  </div>
  // <MarketLink href={market_url !== null ? market_url : "/"}>
  //   <Container>{exchange_name}</Container>
  // </MarketLink>
);

Market.propTypes = {
  exchange_name: PropTypes.string.isRequired,
  market_url: PropTypes.string
};
export default Market;
