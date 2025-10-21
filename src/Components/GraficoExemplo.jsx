import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GraficoExemplo() {
  const data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
    datasets: [
      {
        label: "Pacientes",
        data: [120, 90, 150, 80, 200],
        backgroundColor: "rgba(59, 130, 246, 0.8)", // Azul Tailwind
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1000, // 1 segundo
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Pacientes Atendidos - Últimos Meses" },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-4xl">
      <Bar data={data} options={options} />
    </div>
  );
}


