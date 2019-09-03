import React from "react";
import PropTypes from "prop-types";
import CoinEx from "../../Components/CoinEx";
import Loader from "../../Components/Loader";

const CoinExPresenter = ({ loading, coinex }) =>
  loading ? <Loader /> : coinex.map(data => <CoinEx key={data.id} {...data} />);

CoinExPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coinex: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fiats: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          symbol: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired
};
export default CoinExPresenter;
