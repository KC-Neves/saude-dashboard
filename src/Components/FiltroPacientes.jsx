// src/components/FiltroPacientes.jsx
import { useState } from "react";

export default function FiltroPacientes({ onFiltrar }) {
  const [busca, setBusca] = useState("");

  const handleChange = (e) => {
    const valor = e.target.value;
    setBusca(valor);
    onFiltrar(valor); // envia o texto de busca ao App
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="🔎 Buscar paciente..."
        value={busca}
        onChange={handleChange}
        className="w-full sm:w-80 p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
