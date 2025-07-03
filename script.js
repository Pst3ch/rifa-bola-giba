const cartela = document.getElementById("cartela");
const telefone = "5531975975047";

// Substitua por números já vendidos
const ocupados = [001,055];

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
