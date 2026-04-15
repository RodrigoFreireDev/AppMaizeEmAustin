/* Maize em Austin — utilitários compartilhados */

// Toast simples reutilizável
window.showToast = function (message, ms = 1800) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = message;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.remove("show"), ms);
};

// Vibração leve ao tocar em links/botões (se suportado)
document.addEventListener("click", (e) => {
  const target = e.target.closest("a, button");
  if (target && navigator.vibrate) {
    navigator.vibrate(8);
  }
});
