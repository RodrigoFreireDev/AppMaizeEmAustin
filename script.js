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

// Easter egg: clique no 🌅 abre galeria surpresa
(function () {
  const egg = document.getElementById("heroEgg");
  const overlay = document.getElementById("eggOverlay");
  const closeBtn = document.getElementById("eggClose");
  if (!egg || !overlay) return;

  const open = () => {
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (navigator.vibrate) navigator.vibrate([10, 40, 10]);
  };
  const close = () => {
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  egg.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("show")) close();
  });
})();
