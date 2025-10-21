import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Card from "./Components/Card";
import GraficoExemplo from "./Components/GraficoExemplo";
import FiltroPacientes from "./Components/FiltroPacientes";
import ListaPacientes from "./Components/ListaPacientes";
import pacientesData from "./data/pacientes";

function App() {
  const [filtro, setFiltro] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Filtra os pacientes com base no nome digitado
  const pacientesFiltrados = pacientesData.filter((p) =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div
      className={`flex min-h-screen flex-col md:flex-row ${
        darkMode ? "dark" : ""
      } bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
    >
      <Sidebar />

      <main className="flex-1 p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">🏥 Dashboard de Saúde</h1>
          <button
            className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8 flex-wrap">
          <Card
            title="Pacientes Hoje"
            value={pacientesData.length}
            color="bg-gradient-to-r from-blue-400 to-blue-600"
          />
          <Card
            title="Consultas"
            value="45"
            color="bg-gradient-to-r from-green-400 to-green-600"
          />
          <Card
            title="Novos Cadastros"
            value="12"
            color="bg-gradient-to-r from-purple-400 to-purple-600"
          />
        </div>

        {/* Gráfico */}
        <div className="mb-8">
          <GraficoExemplo />
        </div>

        {/* Filtro de Pacientes */}
        <FiltroPacientes filtro={filtro} setFiltro={setFiltro} />

        {/* Lista de Pacientes */}
        <ListaPacientes pacientes={pacientesFiltrados} />
      </main>
    </div>
  );
}

export default App;
