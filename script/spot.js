document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const spot = lugares.find(l => l.id === id);

  const container = document.getElementById("spot-container");

  if (!spot) {
    container.innerHTML = `<h2 class="text-2xl font-bold text-red-600">Local não encontrado</h2>`;
    return;
  }

  container.innerHTML = `
    <h2 class="text-4xl md:text-5xl font-extrabold text-teal-800 mb-6 drop-shadow-md text-center">${spot.nome}</h2>
    <img src="${spot.imagem}" alt="${spot.nome}" class="w-full h-[400px] md:h-[600px] object-cover rounded-xl shadow-lg mb-10">
    <p class="text-xl text-gray-700 leading-relaxed mb-8">${spot.descricao}</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div>
        <h3 class="text-2xl font-bold text-teal-700 mb-3">História e Cultura</h3>
        <p class="text-gray-700 leading-relaxed">${spot.historia}</p>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-teal-700 mb-3">Como Chegar</h3>
        <p class="text-gray-700 leading-relaxed">${spot.comoChegar}</p>
      </div>
    </div>

    <div class="bg-gradient-to-br from-white to-blue-gray-50 border border-gray-300 rounded-xl p-6 text-gray-800">
      <h4 class="text-lg font-semibold mb-2">📍 Endereço:</h4>
      <p>${spot.endereco}</p>
    </div>

    <div class="text-center mt-12">
      <a href="/index.html#attractions" class="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-full hover:from-amber-600 hover:to-orange-600 transition font-semibold shadow-lg hover:shadow-xl">
        Voltar aos Atrativos
      </a>
    </div>
  `;
});
