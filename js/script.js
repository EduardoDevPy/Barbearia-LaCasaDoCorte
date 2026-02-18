// Menu Hambúrguer Mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Abrir/Fechar menu
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// Fechar menu ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// Fechar menu ao clicar fora
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    menuToggle.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});

// Configuração Swiper
const cortesSwiper = new Swiper(".cortes-swiper", {
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// Animação On Scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Scroll Suave com Offset para Header Fixo
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    // Ignora se for só "#"
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// WhatsApp Automático para todos os botões
const whatsappNumber = "5519983172481";

const botoesAgendar = document.querySelectorAll(
  ".btn-plano, .btn-servico, .btn.primary, .btn-header",
);

botoesAgendar.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();

    const servico = botao.getAttribute("data-servico") || "um serviço";
    const mensagem = `Olá! Gostaria de agendar ${servico}`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${whatsappNumber}?text=${mensagemCodificada}`;
    window.open(urlWhatsApp, "_blank");
  });
});
