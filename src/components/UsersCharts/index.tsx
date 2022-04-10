import { Persons } from "../../models/Persons.models";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface UserChartsProps {
  persons: Persons[];
}

const UsersCharts = ({ persons }: UserChartsProps) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

    useEffect(() => {
      if (persons.length > 0) createGraphical(persons);
    }, [persons]);

  const createGraphical = (persons: Persons[]) => {
    console.log("persons : ", persons)

    setData({
      labels: persons.map((item) => item.nombre) || [],
      datasets: [
        {
          label: "Edades",
          data: persons.map((item) => item.edad) || [],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });

    setOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "Edades segun la persona",
        },
      },
    });
  };

  return (
    <>{Object.keys(data).length > 0 && (<Line options={options} data={data} />)}</>
  );
};


export default UsersCharts;
