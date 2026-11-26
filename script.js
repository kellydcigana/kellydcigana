
/* =========================================
   KELLY D'CIGANA
   Interações do site
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const WHATSAPP = "5586988484099";

  /* =========================================
     1. DADOS DAS TIRAGENS
     Todos os métodos do catálogo
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
      details: "Indicada para quem deseja refletir sobre a vida amorosa e as possibilidades de compromisso."
    },
    {
      name: "Andamento de trabalho",
      category: "espiritualidade",
      label: "ESPIRITUALIDADE",
      question: "Como está o andamento do seu trabalho espiritual?",
      description: "Consulte as cartas sobre a situação e os movimentos relacionados ao trabalho realizado.",
      price: "47,77",
      details: "Leitura para observar simbolicamente o andamento de um trabalho espiritual."
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
      details: "Atendimento mais abrangente, com diferentes áreas da vida."
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
      details: "Atendimento voltado à reflexão sobre a dinâmica de uma conexão."
    },
    {
      name: "Vidas Passadas Simples",
      category: "espiritualidade",
      label: "ESPIRITUALIDADE",
      question: "Quais padrões podem estar ligados à sua trajetória espiritual?",
      description: "Uma leitura objetiva sobre possíveis aprendizados e padrões simbólicos.",
      price: "50,77",
      details: "Uma leitura com foco nos principais aspectos da sua trajetória espiritual."
    },
    {
      name: "Vidas Passadas Completa",
      category: "espiritualidade",
      label: "ESPIRITUALIDADE",
      question: "O que sua trajetória espiritual pode revelar?",
      description: "Uma leitura mais aprofundada sobre experiências simbólicas, aprendizados e possíveis padrões.",
      price: "77,77",
      details: "Uma análise mais completa sobre os aspectos espirituais e os aprendizados que podem ser refletidos na vida atual."
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
      name: "Mesa Real",
      category: "previsoes",
      label: "36 CARTAS",
      question: "O que uma leitura ampla pode revelar sobre seu momento?",
      description: "Uma leitura com 36 cartas para observar diferentes áreas e situações da vida.",
      price: "45,77",
      details: "Consulta realizada com as 36 cartas do Baralho Cigano."
    },
    {
      name: "Fim de ciclo",
      category: "previsoes",
      label: "CICLOS E RENOVAÇÃO",
      question: "O que precisa ser encerrado e o que merece espaço?",
      description: "Uma reflexão sobre encerramentos, aprendizados e novos começos.",
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
      details: "A tiragem oferece uma perspectiva simbólica sobre sua vida financeira."
    },
    {
      name: "Templo de Afrodite",
      category: "amor",
      label: "AMOR",
      question: "O que as cartas mostram sobre essa conexão?",
      description: "Uma leitura voltada à atração, aos sentimentos e à dinâmica amorosa.",
      price: "27,77",
      details: "Método de leitura amorosa."
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
      details: "Interpretação espiritual simbólica."
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
      description: "Veja o que a tiragem aponta sobre sentimentos, intenções e possibilidades de reaproximação.",
      price: "50,77",
      details: "Consulta sobre uma relação passada e a situação atual entre vocês."
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
      details: "Tiragem voltada à reflexão sobre hábitos e mudanças pessoais."
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
      details: "O atendimento é direcionado à área que você escolher."
    },
    {
      name: "5 perguntas detalhadas",
      category: "previsoes",
      label: "CONSULTA DETALHADA",
      question: "Tem várias dúvidas e quer olhar cada uma com calma?",
      description: "Cinco perguntas detalhadas, com conselhos e espaço para dúvidas relacionadas.",
      price: "66,00",
      details: "Pacote com cinco perguntas detalhadas."
    },
    {
      name: "Perguntas avulsas",
      category: "previsoes",
      label: "PERGUNTAS",
      question: "Tem uma dúvida específica?",
      description: "Faça perguntas individuais sobre os assuntos que deseja consultar. Descontos disponíveis para mais de uma pergunta.",
      price: "A partir de 7,77",
      details: "O valor começa em R$ 7,77 por pergunta. Para mais de uma pergunta, consulte os valores promocionais."
    },
    {
      name: "Tiragem Anual",
      category: "previsoes",
      label: "PREVISÕES",
      question: "Quais temas merecem sua atenção ao longo do ano?",
      description: "Uma leitura para refletir sobre tendências, possibilidades e prioridades para o novo ciclo.",
      price: "70,77",
      details: "Consulta de perspectiva anual."
    },
    {
      name: "Arcano Anual",
      category: "previsoes",
      label: "ARCANO ANUAL",
      question: "Qual energia simbólica acompanha seu novo ciclo?",
      description: "Descubra seu arcano regente e reflita sobre os temas do seu ano.",
      price: "40,77",
      details: "Uma leitura baseada no arcano anual e em seus significados simbólicos."
    },
    {
      name: "Tiragem Espiritual",
      category: "espiritualidade",
      label: "ESPIRITUALIDADE",
      question: "O que merece atenção na sua caminhada espiritual?",
      description: "Um espaço para refletir sobre dúvidas e questões relacionadas à sua espiritualidade.",
      price: "60,00",
      details: "Leitura espiritual conforme a questão apresentada."
    },
    {
      name: "Caminhos da Prosperidade",
      category: "financeiro",
      label: "PROSPERIDADE",
      question: "Que escolhas podem favorecer seus próximos passos?",
      description: "Uma leitura sobre oportunidades, prioridades e caminhos ligados à prosperidade.",
      price: "40,77",
      details: "Tiragem para reflexão sobre escolhas e possibilidades materiais."
    }
  ];

  /* =========================================
     2. PERGUNTAS PERSONALIZADAS POR MÉTODO
  ========================================= */

  function getMethodQuestions(service) {
    const name = service.name.toLowerCase();

    if (name.includes("ficante")) {
      return [
        "O que essa pessoa sente por mim?",
        "Quais são as intenções dela comigo?",
        "Como essa conexão pode se desenvolver?"
      ];
    }

    if (name.includes("casamento")) {
      return [
        "Como está meu caminho amoroso?",
        "Existe possibilidade de um relacionamento sério?",
        "O que preciso observar na minha vida afetiva?"
      ];
    }

    if (name.includes("vidas passadas")) {
      return [
        "Quais aspectos da minha trajetória espiritual serão analisados?",
        "Existem padrões simbólicos que merecem minha atenção?",
        "Quais aprendizados posso trazer para minha vida atual?"
      ];
    }

    if (name.includes("mesa real")) {
      return [
        "Quais áreas da minha vida desejo observar?",
        "Existe algum assunto que merece atenção especial?",
        "Qual período ou situação quero compreender melhor?"
      ];
    }

    if (name.includes("arcano anual")) {
      return [
        "Qual é o meu arcano anual?",
        "Quais aprendizados ele representa?",
        "Como posso trabalhar essa energia durante o ano?"
      ];
    }

    if (name.includes("anual")) {
      return [
        "Quais áreas da minha vida desejo analisar?",
        "Quero dar atenção especial a algum mês?",
        "Existe alguma questão importante para este novo ciclo?"
      ];
    }

    if (name.includes("financeiro") || name.includes("prosperidade")) {
      return [
        "Como está minha vida financeira?",
        "Quais oportunidades merecem minha atenção?",
        "O que posso observar sobre minha vida profissional?"
      ];
    }

    if (name.includes("espiritual") || name.includes("energético") || name.includes("trabalho")) {
      return [
        "Qual é minha principal dúvida espiritual?",
        "Existe alguma situação específica que desejo compreender?",
        "O que gostaria de observar na minha caminhada espiritual?"
      ];
    }

    if (name.includes("autoconhecimento") || name.includes("hábitos") || name.includes("amor próprio")) {
      return [
        "O que desejo compreender sobre mim?",
        "Existe algum comportamento que quero transformar?",
        "Qual aspecto pessoal merece mais atenção?"
      ];
    }

    if (service.category === "amor") {
      return [
        "Qual é a situação atual entre nós?",
        "O que desejo saber sobre os sentimentos dessa pessoa?",
        "Existe alguma dúvida específica sobre essa relação?"
      ];
    }

    return [
      "Qual é a situação que desejo consultar?",
      "O que mais gostaria de compreender?",
      "Existe algum detalhe importante sobre essa questão?"
    ];
  }

  /* =========================================
     3. ELEMENTOS DOS ATENDIMENTOS
  ========================================= */

  const serviceList = document.getElementById("serviceList");
  const searchInput = document.getElementById("serviceSearch");
  const filterButtons = document.querySelectorAll(".filter");

  let activeFilter = "todos";
  let searchTerm = "";

  /* =========================================
     4. CRIAÇÃO DO FORMULÁRIO
  ========================================= */

  const modal = document.createElement("div");
  modal.className = "consultation-modal";
  modal.id = "consultationModal";

  modal.innerHTML = `
    <div class="consultation-overlay"></div>

    <div class="consultation-content" role="dialog" aria-modal="true" aria-labelledby="consultationTitle">

      <button class="consultation-close" type="button" aria-label="Fechar formulário">
        &times;
      </button>

      <p class="consultation-eyebrow">KELLY D'CIGANA</p>

      <h2 id="consultationTitle">Vamos iniciar sua consulta</h2>

      <p class="consultation-intro">
        Preencha as informações abaixo para que eu possa compreender melhor sua consulta.
      </p>

      <div class="selected-method">
        <span>MÉTODO ESCOLHIDO</span>
        <strong id="selectedMethodName"></strong>
        <b id="selectedMethodPrice"></b>
      </div>

      <div class="method-questions">
        <h3>Este método pode abordar:</h3>
        <ul id="methodQuestionList"></ul>
      </div>

      <form id="consultationForm">

        <h3 class="form-section-title">Seus dados</h3>

        <label for="clientName">Nome completo *</label>
        <input
          id="clientName"
          name="clientName"
          type="text"
          placeholder="Seu nome completo"
          autocomplete="name"
          required
        >

        <label for="clientBirth">Data de nascimento *</label>
        <input
          id="clientBirth"
          name="clientBirth"
          type="date"
          required
        >

        <h3 class="form-section-title">Dados da outra pessoa</h3>

        <p class="form-help">
          Preencha somente o que souber. Essas informações são opcionais.
          Você pode informar apenas o nome, a data de nascimento ou ambos.
        </p>

        <label for="otherName">Nome da outra pessoa</label>
        <input
          id="otherName"
          name="otherName"
          type="text"
          placeholder="Nome da pessoa">

        <label for="otherBirth">Data de nascimento da outra pessoa</label>
        <input
          id="otherBirth"
          name="otherBirth"
          type="date">

        <label for="otherPhoto">Foto da outra pessoa (opcional)</label>
        <input
          id="otherPhoto"
          name="otherPhoto"
          type="file"
          accept="image/*"
        >

        <p class="form-help">
          Caso envie uma foto, ela será anexada manualmente à conversa do WhatsApp.
        </p>

        <h3 class="form-section-title">Sobre sua consulta</h3>

        <label for="clientQuestion">Sua pergunta ou situação</label>
        <textarea
          id="clientQuestion"
          name="clientQuestion"
          rows="4"
          placeholder="Conte brevemente o que deseja saber..."></textarea>

        <label for="extraInfo">Informações adicionais</label>
        <textarea
          id="extraInfo"
          name="extraInfo"
          rows="3"
          placeholder="Se houver algum detalhe importante, escreva aqui..."></textarea>

        <button class="consultation-submit" type="submit">
          Enviar pelo WhatsApp ↗
        </button>

        <p class="form-privacy">
          Seus dados serão utilizados para organizar o atendimento.
        </p>

      </form>
    </div>
  `;

  document.body.appendChild(modal);

  const modalClose = modal.querySelector(".consultation-close");
  const modalOverlay = modal.querySelector(".consultation-overlay");
  const consultationForm = document.getElementById("consultationForm");

  let selectedService = null;

  function openConsultation(service) {
    selectedService = service;

    document.getElementById("selectedMethodName").textContent = service.name;

    document.getElementById("selectedMethodPrice").textContent =
      service.price.toLowerCase().includes("partir")
        ? `R$ ${service.price}`
        : `R$ ${service.price}`;

    const questionList = document.getElementById("methodQuestionList");
    questionList.replaceChildren();

    getMethodQuestions(service).forEach((question) => {
      const item = document.createElement("li");
      item.textContent = question;
      questionList.appendChild(item);
    });

    consultationForm.reset();

    modal.classList.add("active");
    document.body.classList.add("modal-open");

    modal.querySelector("#clientName").focus();
  }

  function closeConsultation() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  modalClose.addEventListener("click", closeConsultation);
  modalOverlay.addEventListener("click", closeConsultation);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeConsultation();
    }
  });

  /* =========================================
     5. ENVIO PARA O WHATSAPP
  ========================================= */

  consultationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!selectedService) return;

    const clientName = document.getElementById("clientName").value.trim();
    const clientBirth = document.getElementById("clientBirth").value;
    const otherName = document.getElementById("otherName").value.trim();
    const otherBirth = document.getElementById("otherBirth").value;
    const otherPhoto = document.getElementById("otherPhoto").files[0];
    const clientQuestion = document.getElementById("clientQuestion").value.trim();
    const extraInfo = document.getElementById("extraInfo").value.trim();

    if (!clientName || !clientBirth) {
      alert("Preencha seu nome completo e sua data de nascimento.");
      return;
    }

    function formatDate(date) {
      if (!date) return "Não informado";

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    }

    let message = `
Olá, Kelly D'Cigana! ✨

Tenho interesse no seguinte atendimento:

🔮 MÉTODO: ${selectedService.name}
💰 VALOR: ${selectedService.price}

DADOS DA CONSULENTE
Nome: ${clientName}
Nascimento: ${formatDate(clientBirth)}

DADOS DA OUTRA PESSOA
Nome: ${otherName || "Não informado"}
Nascimento: ${formatDate(otherBirth)}

MINHA PERGUNTA / SITUAÇÃO
${clientQuestion || "Ainda não informada."}

INFORMAÇÕES ADICIONAIS
${extraInfo || "Nenhuma informação adicional."}

Gostaria de dar continuidade ao atendimento.
    `.trim();

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    if (otherPhoto) {
      alert(
        "Sua mensagem foi preparada! Como o WhatsApp não permite anexar uma foto automaticamente pelo site, envie a foto manualmente na conversa que acabou de abrir."
      );
    }

    closeConsultation();
  });

  /* =========================================
     6. CRIAÇÃO DOS CARDS
  ========================================= */

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

    price.textContent = service.price.toLowerCase().includes("partir")
      ? `R$ ${service.price}`
      : `R$ ${service.price}`;

    const details = document.createElement("details");
    details.className = "service-details";

    const summary = document.createElement("summary");
    summary.textContent = "Conheça este método";

    const detailText = document.createElement("p");
    detailText.textContent = service.details;

    details.append(summary, detailText);

    const button = document.createElement("button");
    button.className = "service-cta";
    button.type = "button";

    const buttonText = document.createElement("span");
    buttonText.textContent = "Quero esse método";

    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";

    button.append(buttonText, arrow);

    button.addEventListener("click", () => {
      openConsultation(service);
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

  /* =========================================
     7. BUSCA E FILTROS
  ========================================= */

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
      message.textContent =
        "Nenhum método encontrado. Tente outro termo ou categoria.";

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
     8. MENU PARA CELULAR
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
  }

  /* =========================================
     9. ESTRELAS DISCRETAS NO CURSOR
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
     10. CARTAS / ORÁCULOS
  ========================================= */

  const deckRows = document.querySelectorAll(".deck-row");

  deckRows.forEach((row) => {
    row.addEventListener("click", () => {
      const deckName =
        row.dataset.deck ||
        row.querySelector(".deck-name")?.textContent ||
        "oráculo";

      const message =
        `Olá, Kelly D'Cigana! Tenho interesse em uma consulta com ${deckName}. Gostaria de saber mais sobre as opções disponíveis.`;

      const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank", "noopener,noreferrer");
    });
  });

  /* =========================================
     11. LINKS INTERNOS SUAVES
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
     12. ANO AUTOMÁTICO NO RODAPÉ
  ========================================= */

  const footerYear = document.querySelector("[data-year]");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});
