# 🎯 Objetivo do Mini App

Um **web app leve e responsivo**, otimizado para o 📱 *Galaxy A54*, que funcione como um **hub rápido durante a viagem em Austin**.

Sem login, sem backend — **100% offline-friendly (ou quase)**.

---

### ✅ Roda no: **Vercel**

* Deploy em segundos
* HTTPS automático
* Funciona como app (PWA se quiser evoluir depois)
* Fácil de atualizar

✔️ **Recomendação final: Vercel**

---

# 📱 Estrutura da Home

### 🟢 Header

```
👋 Bem-vinda, Maize!
Sua viagem para Austin começa aqui 🇺🇸
```

---

# 🔲 Grid principal (2x2)

### 1️⃣ 🚗 Uber

Função:

* Abrir uma pagina com botoes de atalho de viagens.
  Exemplo: Ir para Hotel(https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=Aloft%20Austin%20at%20The%20Domain)
Sugestões:

* Hotel salvo
* Aeroporto
* Pontos turísticos

---

### 2️⃣ 📍 Lugares & Eventos

Conteúdo:

* Restaurantes
* Pontos turísticos
* Eventos locais

Com descrição e detalhes de funcionamento.
Sugestões:

* Texas State Capitol
* Lady Bird Lake
* South by Southwest (se estiver na época)

---

### 3️⃣ 🚨 Emergência Austin

Pagina com Informações rápidas e botão de ligação rapida(clicou ligou):

* 🚓 Polícia: 911
* 🚑 Ambulância: 911
* 🚒 Bombeiros: 911

Extras úteis:

* Endereço do hotel
* Hospital mais próximo

---

# 🤔 4º Botão  Melhor escolha: 💳 “Dicas & Sobrevivência”

(Esse é o mais útil na prática)

Conteúdo:

* Como pagar (cartão/contactless)
* Gorjeta nos EUA (15–20%)
* Frases úteis em inglês
* Regras básicas culturais

👉 Isso resolve MUITA dor real

---

### Botão extra canto inferior 🧭 Roteiro do dia

* Planejamento simples:

  * Manhã
  * Tarde
  * Noite

---

# 🧱 Estrutura técnica simples

```
/app
  index.html
  styles.css
  script.js
  /pages
    uber.html
    lugares.html
    emergencia.html
    dicas.html
```

---

# 🎨 Layout (recomendação)

* Grid 2x2
* Botões grandes (thumb-friendly)
* Ícones + texto
* Cores suaves (estilo iOS/Material)

---

# 💡 Extras que deixam PROFISSIONAL

* 📍 Botão "Abrir no Google Maps"
* 📞 Botão clicável para ligar
* 🚗 Deep link do Uber
* 🌙 Modo escuro automático
* 📶 Funcionar offline (cache simples)

