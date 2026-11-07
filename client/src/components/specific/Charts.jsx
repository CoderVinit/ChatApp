import { ArcElement, CategoryScale, Chart as ChartJs, Filler, Legend, LineElement, LinearScale, PointElement, Tooltip } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { tokens } from "../../tokens";
import { last7dayes } from "../../lib/Features";

ChartJs.register(Tooltip, Filler, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Legend);


const labels = last7dayes();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { title: false }
  },
  scales: {
    x: {
      grid: {
        display: false,
      }
    },
    y: {
      beginAtZero: true,
      grid: { display: false }
    }
  }
}

const LineChart = ({ value = [] }) => {

  const dataV = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: tokens.paper3,
        label: 'Message',
        fill: true,
        borderColor: tokens.accent,
      },
    ]
  }

  return < Line data={dataV} options={lineChartOptions} />
}

const DoughnutChatOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    }
  },
  cutout: 90
}


const DoughnutChart = ({ value = [], label = [] }) => {

  const dataV = {
    labels: label,
    datasets: [
      {
        data: value,
        label: 'Total chats Vs Group chats',
        borderColor: [tokens.accent, tokens.muted],
        backgroundColor: [tokens.accent, tokens.paper3],
        offset: 40,
      },
    ]
  }

  return < Doughnut style={{ zIndex: 10 }} data={dataV} options={DoughnutChatOptions} />;
}




export { DoughnutChart, LineChart };
