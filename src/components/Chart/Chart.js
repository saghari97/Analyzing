import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValue = props.dataPoints.map(dataPoint => dataPoint.value);
  const maximum = Math.max(...dataValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.lable}
          value={dataPoints.value}
          lable={dataPoints.lable}
          maxValue={maximum}
        />
      ))}
    </div>
  );
};

export default Chart;
