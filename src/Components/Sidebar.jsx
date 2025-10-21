export default function Sidebar() {
    return (
      <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10">🩺 Saúde</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:bg-gray-800 p-2 rounded transition">Home</a>
          <a href="#" className="hover:bg-gray-800 p-2 rounded transition">Pacientes</a>
          <a href="#" className="hover:bg-gray-800 p-2 rounded transition">Relatórios</a>
          <a href="#" className="hover:bg-gray-800 p-2 rounded transition">Configurações</a>
        </nav>
      </aside>
    );
  }
  