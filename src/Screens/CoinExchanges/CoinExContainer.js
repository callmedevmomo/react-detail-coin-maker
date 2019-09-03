import React from "react";
import { coinExchange } from "../../api";
import CoinExPresenter from "./CoinExPresenter";

export default class extends React.Component {
  state = {
    loading: true,
    coinex: []
  };
  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      const { data: coinex } = await coinExchange(id);
      this.setState({ coinex });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <CoinExPresenter {...this.state} />;
  }
}
