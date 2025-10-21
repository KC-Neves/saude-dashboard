export default function Card({ title, value, color }) {
    return (
      <div
        className={`p-5 rounded-2xl shadow-md flex-1 transform transition-transform duration-300 hover:scale-105 ${color}`}
      >
        {/* Mantém os títulos e valores que você já tinha */}
        <h3 className="text-gray-100 font-medium">{title}</h3>
        <p className="text-3xl font-bold text-white mt-2">{value}</p>
      </div>
    );
  }
  