// src/data/pacientes.js

const API_URL = "https://api-pacientes-vh6j.onrender.com/api/pacientes";

export async function buscarPacientes() {
  try {
    const token = localStorage.getItem("token"); // 🔑 pega o token do login

    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // envia o token no cabeçalho
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar pacientes");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Erro ao buscar pacientes:", error);
    return [];
  }
}
