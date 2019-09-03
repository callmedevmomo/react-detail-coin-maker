import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { getExchanges } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    exchanges: []
  };
  getExchanges = async () => {
    try {
      const { data: exchanges } = await getExchanges();
      this.setState({ exchanges });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.getExchanges();
  }
  render() {
    return <ExchangesPresenter {...this.state} />;
  }
}
