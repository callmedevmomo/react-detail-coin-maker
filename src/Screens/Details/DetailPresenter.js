import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Detail from "../../Components/Detail";

const DetailPresenter = ({ loading, details }) =>
  loading ? <Loader /> : <Detail {...details} />;

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    description: PropTypes.string,
    rank: PropTypes.number,
    open_source: PropTypes.bool,
    proof_type: PropTypes.string,
    org_structure: PropTypes.string
  })
};
export default DetailPresenter;
