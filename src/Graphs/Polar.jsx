import React from "react";
import PropTypes from "prop-types";
import { Chart, Polar } from "react-chartjs-2";
import ChartBackgroundColorPlugin from "../Colors/ChartBackgroundColorPlugin";


export default class PolarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.chart = React.createRef();
  }

  componentDidMount() {
    console.log("this.chart", this.chart.current);
  }

  componentWillMount() {
    Chart.pluginService.register(ChartBackgroundColorPlugin);
  }

  get options() {
    return {
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scale: {
        display: false,
      },
      events: ["click"],
    };
  }

  get data() {
    return {
      datasets: [{
        label: "Skills",
        data: this.props.data,
      }],
      labels: [
        ...this.props.labels,
      ],
    };
  }

  render() {
    return (
      <div style={{
        height: 300,
        width: 400,
      }}>
        <Polar
          ref={this.chart}
          width={200}
          height={200}
          data={this.data}
          options={this.options}
        />
      </div>
    );
  }
}

PolarGraph.propTypes = {
  data: PropTypes.array,
  labels: PropTypes.array,
};

PolarGraph.defaultProps = {
  data: {},
  labels: [],
};
