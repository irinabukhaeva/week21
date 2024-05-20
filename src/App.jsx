import './App.css'
import { Chart } from "react-google-charts"

export const data = [
  ["Задача", "Часов в день"],
  ["Работа", 10],
  ["Прием пищи", 2],
  ["Общение", 2],
  ["Учеба", 2],
  ["Сон", 8],
];

export const options = {
  title: "Мои ежедневные дела",
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App
