import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div``;

const TitleBox = styled.div`
  margin-bottom: 40px;
`;
const TitleText = styled.span`
  font-size: 42px;
`;

const MiddelBox = styled.div`
  margin-bottom: 60px;
`;
const MiddelText = styled.span`
  opacity: 0.8;
  line-height: 2.5;
`;

const LastBox = styled.div`
  margin-bottom: 10px;
`;
const LastTitle = styled.span`
  font-weight: bolder;
  font-size: 14px;
`;
const LastText = styled.span`
  padding-left: 5px;
  font-size: 14px;
`;

const Btnbox = styled.div`
  margin-top: 30px;
  display: flex;
`;

const DetailLink = styled(Link)`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #00d2d3;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 50px;
  }
  font-weight: bolder;
  font-size: 14px;
  opacity: 0.8;
  &:active,
  :focus {
    background-color: #00d2d3;
    color: white;
    opacity: 0.9;
  }
`;

const Detail = ({
  id,
  name,
  symbol,
  description,
  rank,
  open_source,
  proof_type,
  org_structure
}) => (
  <Container>
    <TitleBox>
      <TitleText>
        {name} / {symbol}
      </TitleText>
    </TitleBox>
    <MiddelBox>
      <MiddelText>{description ? description : "⚠️ No data "}</MiddelText>
    </MiddelBox>
    <LastBox>
      <LastTitle>Rank:</LastTitle>
      <LastText>{rank ? rank : "⚠️ No data "}</LastText>
    </LastBox>
    <LastBox>
      <LastTitle>Open Source:</LastTitle>
      <LastText>{open_source === true ? "Yes" : "No"}</LastText>
    </LastBox>
    <LastBox>
      <LastTitle>Proof Type:</LastTitle>
      <LastText>{proof_type ? proof_type : "⚠️ No data "}</LastText>
    </LastBox>
    <LastBox>
      <LastTitle>Structure:</LastTitle>
      <LastText>{org_structure ? org_structure : "⚠️ No data "}</LastText>
    </LastBox>
    <Btnbox>
      <DetailLink to={`/coins/${id}/markets`}>MARKETS</DetailLink>
      <DetailLink to={`/coins/${id}/exchanges`}>EXCHANGES</DetailLink>
    </Btnbox>
  </Container>
);

Detail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  description: PropTypes.string,
  rank: PropTypes.number,
  open_source: PropTypes.bool,
  proof_type: PropTypes.string,
  org_structure: PropTypes.string
};
export default Detail;
