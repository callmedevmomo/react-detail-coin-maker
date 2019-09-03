import React from "react";
import MarketPresenter from "./MarketPresenter";
import { coinMarket } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    market: []
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      const { data: market } = await coinMarket(id);
      this.setState({ market });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <MarketPresenter {...this.state} />;
  }
}
