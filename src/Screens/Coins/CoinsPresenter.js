import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Coin from "../../Components/Coin";

const CoinsPresenter = ({ loading, coins }) =>
  loading ? (
    <Loader />
  ) : (
    coins
      .filter(coin => coin.rank !== 0)
      .sort((first, second) => first.rank - second.rank)
      .map(coin => <Coin key={coin.id} {...coin} />)
  );

CoinsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default CoinsPresenter;
