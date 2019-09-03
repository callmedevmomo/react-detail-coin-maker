import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 15px 0px;
`;
const Name = styled.div`
  margin-bottom: 8px;
  font-weight: bolder;
  font-size: 14px;
  opacity: 0.8;
`;

const BeforeTxt = styled.span`
  font-size: 14px;
  padding-right: 8px;
`;

const Symbol = styled.span`
  padding-right: 5px;
  font-size: 14px;
  color: #2e86de;
  font-weight: 600;
`;
const Nothing = styled.span`
  font-size: 14px;
  color: #e84118;
  font-weight: 600;
`;

const CoinEx = ({ name, fiats }) => (
  <Container>
    {fiats.length === 0 ? null : (
      <div>
        <Name>{name}</Name>
        <BeforeTxt>Pay On</BeforeTxt>
        {fiats.map((data, index) => (
          <Symbol key={index}>{data.symbol}</Symbol>
        ))}
      </div>
    )}
  </Container>

  // <Container>
  //   <Name>{name}</Name>
  //   <BeforeTxt> Pay On </BeforeTxt>{" "}
  //   {fiats[0] ? (
  //     fiats.map((data, index) => <Symbol key={index}>{data.symbol} </Symbol>)
  //   ) : (
  //     <Nothing>N o t h i n g</Nothing>
  //   )}
  // </Container>
);
CoinEx.propTypes = {
  name: PropTypes.string.isRequired,
  fiats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string
    })
  ).isRequired
};
export default CoinEx;
