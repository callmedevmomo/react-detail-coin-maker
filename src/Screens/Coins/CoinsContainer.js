import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { getCoins } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    coins: []
  };
  getCoins = async () => {
    try {
      const { data: coins } = await getCoins();
      this.setState({
        coins
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.getCoins();
  }
  render() {
    return <CoinsPresenter {...this.state} />;
  }
}
