// src/components/ListaPacientes.jsx
export default function ListaPacientes({ pacientes }) {
    return (
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">📋 Pacientes</h2>
  
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {pacientes.length > 0 ? (
            pacientes.map((p) => (
              <li key={p.id} className="py-3">
                <p className="font-bold">{p.nome}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Idade: {p.idade} anos | Pressão: {p.pressao} | Glicemia: {p.glicemia} mg/dL | BPM: {p.batimentos}
                </p>
              </li>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 italic">
              Nenhum paciente encontrado.
            </p>
          )}
        </ul>
      </div>
    );
  }
  