function mostraTintas() {
  const lista = document.querySelector("[data-lista]");
  if (lista.style.display === "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
}