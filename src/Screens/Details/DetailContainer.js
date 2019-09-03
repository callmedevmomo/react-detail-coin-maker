import React from "react";
import DetailPresenter from "./DetailPresenter";
import { coinDetail } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    details: null
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    if (!id) {
      return push("/");
    }

    try {
      const { data: details } = await coinDetail(id);
      this.setState({
        details
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    return <DetailPresenter {...this.state} />;
  }
}
