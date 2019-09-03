import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Market from "../../Components/Market";

const MarketPresenter = ({ loading, market }) =>
  loading ? (
    <Loader />
  ) : (
    market.map((data, index) => <Market key={index} {...data} />)
  );

MarketPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  market: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_name: PropTypes.string.isRequired,
      market_url: PropTypes.string
    })
  )
};
export default MarketPresenter;
