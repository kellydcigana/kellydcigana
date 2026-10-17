/* =========================================
   KELLY D'CIGANA
   Interações do site
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const WHATSAPP = "5586988484099";

  /* =========================================
     1. DADOS DAS TIRAGENS
  ========================================= */

  const services = [
    {
      name: "Método Ficante",
      category: "amor",
      label: "AMOR",
      question: "O que esse ficante realmente sente por você?",
      description: "Explore os sentimentos, as intenções e as possibilidades dessa conexão.",
      price: "27,77",
      details: "Uma leitura voltada para compreender a dinâmica entre você e a pessoa com quem está se envolvendo."
    },
    {
      name: "Casamento",
      category: "amor",
      label: "AMOR",
      question: "Como está o caminho para um futuro amoroso?",
      description: "Uma tiragem para quem está solteira e deseja olhar para as possibilidades de relacionamento.",
      price: "27,77",
      details: "Indicada para solteiros que desejam refletir sobre a vida amorosa e as possibilidades de compromisso."
    },
    {
      name: "Andamento de trabalho",
      category: "espiritualidade",
      label: "ESPIRITUALIDADE",
      question: "Como está o andamento do seu trabalho espiritual?",
      description: "Consulte as cartas sobre a situação e os movimentos relacionados ao trabalho realizado.",
      price: "47,77",
      details: "Leitura para observar simbolicamente o andamento de um trabalho espiritual. A interpretação não garante resultados."
    },
    {
      name: "Templo do Amor Próprio",
      category: "autoconhecimento",
      label: "AUTOCONHECIMENTO",
      question: "O que você precisa reconhecer em si mesma?",
      description: "Um olhar para seus sentimentos, sua autoestima e sua relação consigo mesma.",
      price: "37,77",
      details: "Uma tiragem dedicada à reflexão sobre amor-próprio, necessidades emocionais e desenvolvimento pessoal."
    },
    {
      name: "Horizonte de Flores",
      category: "amor",
      label: "AMOR",
      question: "O que pode florescer na sua vida amorosa?",
      description: "Observe tendências e possibilidades para os próximos passos da sua vida afetiva.",
      price: "47,77",
      details: "Uma leitura para refletir sobre os caminhos amorosos e as possibilidades que se apresentam."
    },
    {
      name: "Tiragem completa",
      category: "previsoes",
      label: "LEITURA COMPLETA",
      question: "O que as cartas mostram sobre seu momento atual?",
      description: "Uma leitura mais ampla para olhar diferentes aspectos da situação que você está vivendo.",
      price: "107,77",
      details: "Atendimento mais abrangente. Entre em contato para confirmar o formato e os temas contemplados."
    },
    {
      name: "Orçamento de Trabalho",
      category: "espiritualidade",
      label: "TRABALHOS ESPIRITUAIS",
      question: "Qual trabalho faz sentido para sua situação?",
      description: "Converse sobre sua necessidade e receba orientação sobre as opções disponíveis.",
      price: "21,77",
      details: "O valor do orçamento é descontado caso o trabalho seja realizado, conforme as condições combinadas."
    },
    {
      name: "Templo do Diabo",
      category: "amor",
      label: "AMOR E DESEJOS",
      question: "O que existe por trás dessa conexão intensa?",
      description: "Uma leitura sobre desejos, atração, conflitos e dinâmicas de uma relação.",
      price: "27,77",
      details: "Atendimento voltado à reflexão sobre a dinâmica de uma conexão e os aspectos que a envolvem."
    },
    {
      name: "Vidas Passadas",
      category: "espiritualidade",
      label: "ESPIRITUALIDADE",
      question: "Que padrões você sente que se repetem na sua vida?",
      description: "Uma leitura simbólica para refletir sobre padrões, aprendizados e questões pessoais.",
      price: "95,77",
      details: "Interpretação espiritual e simbólica. As cartas não comprovam fatos históricos sobre vidas passadas."
    },
    {
      name: "Jogo amoroso individual",
      category: "amor",
      label: "AMOR",
      question: "O que você precisa compreender sobre sua vida amorosa?",
      description: "Uma consulta individual voltada às suas dúvidas e ao seu momento afetivo.",
      price: "30,77",
      details: "Leitura individual com foco na questão amorosa apresentada durante o atendimento."
    },
    {
      name: "Mesa real",
      category: "previsoes",
      label: "36 CARTAS",
      question: "O que uma leitura ampla pode revelar sobre seu momento?",
      description: "Uma leitura com 36 cartas para observar diferentes áreas e situações da vida.",
      price: "60,77",
      details: "Consulta realizada com as 36 cartas do Baralho Cigano. Combine com a cartomante os detalhes da leitura."
    },
    {
      name: "Fim de ciclo",
      category: "previsoes",
      label: "CICLOS E RENOVAÇÃO",
      question: "O que precisa ser encerrado e o que merece espaço?",
      description: "Uma reflexão sobre encerramentos, aprendizados e novos começos no mês ou no fim do ano.",
      price: "57,77",
      details: "Tiragem voltada à reflexão sobre o ciclo que se encerra e as possibilidades para a próxima etapa."
    },
    {
      name: "Método casal",
      category: "amor",
      label: "RELACIONAMENTO",
      question: "Como está a dinâmica entre vocês?",
      description: "Explore os sentimentos, os desafios e as possibilidades da relação.",
      price: "57,77",
      details: "Leitura sobre a dinâmica do casal e os pontos que merecem atenção na relação."
    },
    {
      name: "Método Financeiro",
      category: "financeiro",
      label: "FINANCEIRO",
      question: "O que merece sua atenção na vida financeira?",
      description: "Uma leitura para refletir sobre escolhas, prioridades e caminhos profissionais ou financeiros.",
      price: "30,77",
      details: "A tiragem oferece uma perspectiva simbólica e não substitui planejamento financeiro ou orientação profissional."
    },
    {
      name: "Templo de Afrodite",
      category: "amor",
      label: "AMOR",
      question: "O que as cartas mostram sobre essa conexão?",
      description: "Uma leitura voltada à atração, aos sentimentos e à dinâmica amorosa.",
      price: "27,77",
      details: "Método de leitura amorosa. Entre em contato para saber os aspectos contemplados no atendimento."
    },
    {
      name: "Meu amor",
      category: "amor",
      label: "AMOR",
      question: "O que você precisa compreender sobre essa pessoa?",
      description: "Uma tiragem para olhar sentimentos, intenções e questões da vida afetiva.",
      price: "50,77",
      details: "Atendimento amoroso direcionado à pessoa e à situação que você deseja consultar."
    },
    {
      name: "Nó energético",
      category: "espiritualidade",
      label: "ESPIRITUALIDADE",
      question: "O que parece estar dificultando seu caminho?",
      description: "Uma leitura espiritual para refletir sobre bloqueios percebidos e pontos que pedem atenção.",
      price: "30,77",
      details: "Interpretação espiritual simbólica, sem afirmar que exista necessariamente um bloqueio ou demanda."
    },
    {
      name: "Confusão sentimental",
      category: "amor",
      label: "SENTIMENTOS",
      question: "Como entender essa situação amorosa confusa?",
      description: "Organize suas dúvidas e observe os diferentes aspectos envolvidos nessa conexão.",
      price: "30,77",
      details: "Leitura para refletir sobre sentimentos, dúvidas e dinâmicas de uma situação afetiva."
    },
    {
      name: "Tiragem do ex",
      category: "amor",
      label: "AMOR",
      question: "Seu ex ainda pensa em você?",
      description: "Veja o que a tiragem aponta sobre os sentimentos atuais, as intenções e a possibilidade de reaproximação.",
      price: "50,77",
      details: "Consulta sobre uma relação passada e a situação atual entre vocês. A leitura não garante reconciliação."
    },
    {
      name: "Autoconhecimento",
      category: "autoconhecimento",
      label: "AUTOCONHECIMENTO",
      question: "O que você precisa enxergar em si neste momento?",
      description: "Um espaço de reflexão sobre emoções, escolhas, desafios e desenvolvimento pessoal.",
      price: "30,77",
      details: "Leitura direcionada ao autoconhecimento e à reflexão sobre o momento presente."
    },
    {
      name: "Mudança de hábitos",
      category: "autoconhecimento",
      label: "AUTOCONHECIMENTO",
      question: "O que pode ajudar você a mudar seus padrões?",
      description: "Reflita sobre hábitos, escolhas e atitudes que deseja transformar.",
      price: "40,77",
      details: "Tiragem voltada à reflexão sobre hábitos e mudanças pessoais. Não substitui acompanhamento profissional quando necessário."
    },
    {
      name: "Amor simples",
      category: "amor",
      label: "AMOR",
      question: "O que você precisa saber sobre sua questão amorosa?",
      description: "Uma leitura direta para uma dúvida afetiva específica.",
      price: "17,77",
      details: "Atendimento amoroso mais objetivo, indicado para uma questão delimitada."
    },
    {
      name: "Rapidinha do relacionamento",
      category: "amor",
      label: "RELACIONAMENTO",
      question: "O que merece sua atenção nessa relação?",
      description: "Uma consulta objetiva para olhar uma questão pontual do relacionamento.",
      price: "21,77",
      details: "Tiragem breve sobre uma dúvida específica relacionada ao relacionamento."
    },
    {
      name: "Tiragem por área",
      category: "previsoes",
      label: "LEITURA POR ÁREA",
      question: "Qual área da sua vida você deseja compreender melhor?",
      description: "Escolha um tema específico para direcionar sua consulta.",
      price: "30,77",
      details: "O atendimento é direcionado à área que você escolher. Informe o tema ao entrar em contato."
    },
    {
      name: "5 perguntas detalhadas",
      category: "previsoes",
      label: "CONSULTA DETALHADA",
      question: "Tem várias dúvidas e quer olhar cada uma com calma?",
      description: "Cinco perguntas detalhadas, com conselhos e espaço para dúvidas relacionadas à consulta.",
      price: "66,00",
      details: "Pacote com cinco perguntas detalhadas, conselhos e esclarecimento de dúvidas relacionadas, conforme combinado no atendimento."
    },
    {
      name: "Tiragem Anual",
      category: "previsoes",
      label: "PREVISÕES",
      question: "Quais temas merecem sua atenção ao longo do ano?",
      description: "Uma leitura para refletir sobre tendências, possibilidades e prioridades para o novo ciclo.",
      price: "70,77",
      details: "Consulta de perspectiva anual. As cartas não determinam acontecimentos inevitáveis."
    },
    {
      name: "Tiragem Espiritual",
      category: "espiritualidade",
      label: "ESPIRITUALIDADE",
      question: "O que merece atenção na sua caminhada espiritual?",
      description: "Um espaço para refletir sobre dúvidas e questões relacionadas à sua espiritualidade.",
      price: "60,00",
      details: "Leitura espiritual conforme a questão apresentada pela consulente."
    },
    {
      name: "Caminhos da Prosperidade",
      category: "financeiro",
      label: "PROSPERIDADE",
      question: "Que escolhas podem favorecer seus próximos passos?",
      description: "Uma leitura sobre oportunidades, prioridades e caminhos ligados à prosperidade.",
      price: "40,77",
      details: "Tiragem para reflexão sobre escolhas e possibilidades materiais. Não garante ganhos financeiros."
    }
  ];

  /* =========================================
     2. ELEMENTOS DOS ATENDIMENTOS
  ========================================= */

  const serviceList = document.getElementById("serviceList");
  const searchInput = document.getElementById("serviceSearch");
  const filterButtons = document.querySelectorAll(".filter");

  let activeFilter = "todos";
  let searchTerm = "";

  function formatWhatsAppMessage(serviceName) {
    return `Olá, Kelly D'Cigana! Tenho interesse na tiragem "${serviceName}". Gostaria de saber mais sobre o atendimento.`;
  }

  function createServiceCard(service) {
    const card = document.createElement("article");
    card.className = "service-card";
    card.dataset.category = service.category;

    const category = document.createElement("p");
    category.className = "service-category";
    category.textContent = service.label;

    const title = document.createElement("h3");
    title.textContent = service.name;

    const question = document.createElement("p");
    question.className = "service-question";
    question.textContent = service.question;

    const description = document.createElement("p");
    description.className = "service-description";
    description.textContent = service.description;

    const price = document.createElement("p");
    price.className = "service-price";
    price.textContent = `R$ ${service.price}`;

    const details = document.createElement("details");
    details.className = "service-details";

    const summary = document.createElement("summary");
    summary.textContent = "Quero saber mais sobre esta tiragem";

    const detailText = document.createElement("p");
    detailText.textContent = service.details;

    details.append(summary, detailText);

    const button = document.createElement("button");
    button.className = "service-cta";
    button.type = "button";

    const buttonText = document.createElement("span");
    buttonText.textContent = "Quero essa tiragem";

    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";

    button.append(buttonText, arrow);

    button.addEventListener("click", () => {
      const message = formatWhatsAppMessage(service.name);
      const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank", "noopener,noreferrer");
    });

    card.append(
      category,
      title,
      question,
      description,
      price,
      details,
      button
    );

    return card;
  }

  function renderServices() {
    if (!serviceList) return;

    serviceList.replaceChildren();

    const filteredServices = services.filter((service) => {
      const matchesCategory =
        activeFilter === "todos" || service.category === activeFilter;

      const searchableText = [
        service.name,
        service.label,
        service.question,
        service.description,
        service.details
      ].join(" ").toLocaleLowerCase("pt-BR");

      const matchesSearch = searchableText.includes(
        searchTerm.toLocaleLowerCase("pt-BR")
      );

      return matchesCategory && matchesSearch;
    });

    if (filteredServices.length === 0) {
      const message = document.createElement("p");
      message.className = "no-results";
      message.textContent = "Nenhuma tiragem encontrada. Tente outro termo ou categoria.";
      serviceList.appendChild(message);
      return;
    }

    const fragment = document.createDocumentFragment();

    filteredServices.forEach((service) => {
      fragment.appendChild(createServiceCard(service));
    });

    serviceList.appendChild(fragment);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "todos";

      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      renderServices();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchTerm = searchInput.value.trim();
      renderServices();
    });
  }

  renderServices();

  /* =========================================
     3. MENU PARA CELULAR
  ========================================= */

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
      }
    });
  }

  /* =========================================
     4. ESTRELAS DISCRETAS NO CURSOR
  ========================================= */

  const starLayer = document.getElementById("star-layer");
  const cursorGlow = document.querySelector(".cursor-glow");

  const canUseCursorEffects =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (canUseCursorEffects && starLayer) {
    let lastStarTime = 0;

    document.addEventListener("mousemove", (event) => {
      if (cursorGlow) {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
      }

      const now = performance.now();

      if (now - lastStarTime < 75) return;

      lastStarTime = now;

      const star = document.createElement("span");
      star.className = "cursor-star";
      star.setAttribute("aria-hidden", "true");
      star.textContent = Math.random() > 0.5 ? "✧" : "·";

      star.style.left = `${event.clientX + (Math.random() * 12 - 6)}px`;
      star.style.top = `${event.clientY + (Math.random() * 12 - 6)}px`;
      star.style.fontSize = `${Math.random() * 6 + 8}px`;

      starLayer.appendChild(star);

      window.setTimeout(() => {
        star.remove();
      }, 750);
    });
  }

  /* =========================================
     5. CARTAS DE OBJETIVOS
  ========================================= */

  const deckRows = document.querySelectorAll(".deck-row");

  deckRows.forEach((row) => {
    row.addEventListener("click", () => {
      const deckName = row.dataset.deck || row.querySelector(".deck-name")?.textContent || "oráculo";

      const message =
        `Olá, Kelly D'Cigana! Tenho interesse em uma consulta com ${deckName}. Gostaria de saber mais sobre as opções disponíveis.`;

      const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank", "noopener,noreferrer");
    });
  });

  /* =========================================
     6. LINKS INTERNOS SUAVES
  ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });

      if (history.replaceState) {
        history.replaceState(null, "", targetId);
      }
    });
  });

  /* =========================================
     7. ANO AUTOMÁTICO NO RODAPÉ
  ========================================= */

  const footerYear = document.querySelector("[data-year]");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});
