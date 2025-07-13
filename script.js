const cartela = document.getElementById("cartela");
const telefone = "31975975047";

// Substitua por números já vendidos
const ocupados = [45, 46, 47, 94, 57, 7, 1, 19, 88, 13, 33, 17, 64, 6, 117, 30, 9, 26, 14, 29, 86, 67, 37, 94, 22];

for (let i = 1; i <= 200; i++) {
  const num = document.createElement(ocupados.includes(i) ? "span" : "a");
  num.textContent = i.toString().padStart(3, "0");
  num.className = "numero" + (ocupados.includes(i) ? " ocupado" : "");

  if (!ocupados.includes(i)) {
    const msg = `Oi! Quero reservar o número ${i} da rifa da bola do Giba. Já fiz o PIX e segue o comprovante.`;
    num.href = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
    num.target = "_blank";
  }

  cartela.appendChild(num);
}
