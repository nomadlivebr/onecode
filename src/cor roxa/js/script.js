(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const backToTop = document.querySelector("[data-back-to-top]");
  const toast = document.querySelector("[data-toast]");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const sections = [
    ...document.querySelectorAll("main section[id]"),
  ];
  const navLinks = document.querySelectorAll(
    ".main-nav a[href^='#']",
  );

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const closeMenu = () => {
    if (!menuToggle || !nav) return;

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuToggle?.addEventListener("click", () => {
    const willOpen =
      menuToggle.getAttribute("aria-expanded") !== "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(willOpen),
    );
    menuToggle.setAttribute(
      "aria-label",
      willOpen ? "Fechar menu" : "Abrir menu",
    );
    nav?.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  let scrollScheduled = false;

  const updateActiveNav = () => {
    const marker =
      window.scrollY +
      Math.min(window.innerHeight * 0.36, 300);

    let activeSection = sections[0];

    sections.forEach((section) => {
      if (section.offsetTop <= marker) {
        activeSection = section;
      }
    });

    navLinks.forEach((link) => {
      const isActive =
        activeSection &&
        link.getAttribute("href") ===
          `#${activeSection.id}`;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateScrollState = () => {
    const currentY = window.scrollY;

    header?.classList.toggle(
      "is-scrolled",
      currentY > 18,
    );

    backToTop?.classList.toggle(
      "is-visible",
      currentY > 700,
    );

    updateActiveNav();
    scrollScheduled = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollScheduled) {
        window.requestAnimationFrame(updateScrollState);
        scrollScheduled = true;
      }
    },
    {
      passive: true,
    },
  );

  updateScrollState();

  backToTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  });

  const revealItems =
    document.querySelectorAll(".reveal");

  if (
    reduceMotion ||
    !("IntersectionObserver" in window)
  ) {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8%",
        threshold: 0.12,
      },
    );

    revealItems.forEach((item) => {
      revealObserver.observe(item);
    });
  }

  document
    .querySelectorAll(".faq-item button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const accordion = item?.parentElement;

        if (!item || !accordion) return;

        const shouldOpen =
          !item.classList.contains("is-open");

        accordion
          .querySelectorAll(".faq-item")
          .forEach((faqItem) => {
            faqItem.classList.remove("is-open");
            faqItem
              .querySelector("button")
              ?.setAttribute(
                "aria-expanded",
                "false",
              );
          });

        if (shouldOpen) {
          item.classList.add("is-open");
          button.setAttribute(
            "aria-expanded",
            "true",
          );
        }
      });
    });

  const formatPhone = (value) => {
    const digits = value
      .replace(/\D/g, "")
      .slice(0, 11);

    if (digits.length <= 2) {
      return digits ? `(${digits}` : "";
    }

    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(
        2,
        6,
      )}-${digits.slice(6)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(
      2,
      7,
    )}-${digits.slice(7)}`;
  };

  document
    .querySelectorAll("input[name='telefone']")
    .forEach((input) => {
      input.addEventListener("input", () => {
        input.value = formatPhone(input.value);
      });
    });

  let toastTimer;

  const showToast = (
    message,
    type = "success",
  ) => {
    if (!toast) return;

    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.toggle(
      "is-error",
      type === "error",
    );
    toast.classList.add("is-visible");

    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 5200);
  };

  const setFieldError = (
    control,
    message = "",
  ) => {
    const field = control.closest(".field");

    if (!field) return;

    field.classList.toggle(
      "has-error",
      Boolean(message),
    );

    const error =
      field.querySelector(".field-error");

    if (error) {
      error.textContent = message;
    }
  };

  const validateForm = (form) => {
    let valid = true;

    const name = form.elements.nome;
    const phone = form.elements.telefone;
    const project = form.elements.projeto;
    const budget = form.elements.orcamento;
    const consent = form.elements.consentimento;

    const validators = [
      [
        name,
        name.value.trim().length >= 2,
        "Informe seu nome.",
      ],
      [
        phone,
        phone.value.replace(/\D/g, "").length >= 10,
        "Informe um telefone válido.",
      ],
      [
        project,
        project.value.trim().length >= 10,
        "Conte um pouco mais sobre o projeto.",
      ],
      [
        budget,
        Boolean(budget.value),
        "Selecione uma faixa de orçamento.",
      ],
    ];

    validators.forEach(
      ([control, condition, message]) => {
        setFieldError(
          control,
          condition ? "" : message,
        );

        if (!condition) {
          valid = false;
        }
      },
    );

    if (!consent.checked) {
      consent.focus({
        preventScroll: true,
      });

      valid = false;
    }

    if (!valid) {
      const firstInvalid = form.querySelector(
        ".has-error input, .has-error textarea, .has-error select",
      );

      firstInvalid?.focus();
    }

    return valid;
  };

  let leadSubmittedOnThisPage = false;
  let leadSubmissionInProgress = false;

  const lockAllLeadForms = () => {
    document
      .querySelectorAll("[data-lead-form]")
      .forEach((leadForm) => {
        const button = leadForm.querySelector(
          "button[type='submit']",
        );

        if (!button) return;

        button.disabled = true;

        const buttonText =
          button.querySelector("span");

        if (buttonText) {
          buttonText.textContent =
            "Solicitação enviada";
        }
      });
  };

  document
    .querySelectorAll("[data-lead-form]")
    .forEach((form) => {
      form
        .querySelectorAll(
          "input, textarea, select",
        )
        .forEach((control) => {
          control.addEventListener(
            "input",
            () => setFieldError(control),
          );

          control.addEventListener(
            "change",
            () => setFieldError(control),
          );
        });

      form.addEventListener(
        "submit",
        async (event) => {
          event.preventDefault();

          const status =
            form.querySelector(".form-status");

          const submit = form.querySelector(
            "button[type='submit']",
          );

          const submitText =
            submit?.querySelector("span");

          const originalLabel =
            submitText?.textContent || "Enviar";

          if (leadSubmittedOnThisPage) {
            const message =
              "Você já enviou uma solicitação. Atualize a página para enviar outra.";

            if (status) {
              status.textContent = message;
              status.classList.remove("is-error");
            }

            showToast(message);
            return;
          }

          if (leadSubmissionInProgress) {
            const message =
              "Sua solicitação já está sendo enviada.";

            if (status) {
              status.textContent = message;
              status.classList.remove("is-error");
            }

            showToast(message);
            return;
          }

          if (!validateForm(form)) {
            if (status) {
              status.textContent =
                "Revise os campos destacados.";
              status.classList.add("is-error");
            }

            return;
          }

          const data = Object.fromEntries(
            new FormData(form).entries(),
          );

          if (data.website) return;

          leadSubmissionInProgress = true;

          if (submit) {
            submit.disabled = true;
          }

          if (submitText) {
            submitText.textContent = "Enviando...";
          }

          if (status) {
            status.textContent = "";
            status.classList.remove("is-error");
          }

          try {
            const response = await fetch(
              "/api/contatos",
              {
                method: "POST",
                headers: {
                  "Content-Type":
                    "application/json",
                },
                body: JSON.stringify(data),
              },
            );

            const result = await response
              .json()
              .catch(() => ({}));

            if (!response.ok) {
  throw new Error(
    result.message ||
      "Não foi possível enviar agora.",
  );
}

// Google Ads: registra a conversão somente após a API confirmar sucesso
if (typeof gtag === "function") {
  gtag("event", "conversion", {
    send_to: "AW-18426256719/gR2wCNP3vu0cEM-6qdJE",
    value: 1.0,
    currency: "BRL",
  });
}

const successMessage =
  "Recebemos seu projeto! Nossa equipe entrará em contato em breve.";

leadSubmittedOnThisPage = true;

form.reset();

if (status) {
  status.textContent = successMessage;
}

lockAllLeadForms();
showToast(successMessage);} 
            catch (error) {
            const localFile =
              window.location.protocol === "file:";

            const message = localFile
              ? "Para salvar os formulários, inicie o servidor local seguindo o README."
              : error.message ||
                "Não foi possível enviar. Tente novamente.";

            if (status) {
              status.textContent = message;
              status.classList.add("is-error");
            }

            showToast(message, "error");
          } finally {
            leadSubmissionInProgress = false;

            if (!leadSubmittedOnThisPage) {
              if (submit) {
                submit.disabled = false;
              }

              if (submitText) {
                submitText.textContent =
                  originalLabel;
              }
            }
          }
        },
      );
    });
})();

(() => {
  const lazyVideos = document.querySelectorAll(
    "video[data-lazy-video]",
  );

  function loadVideo(video) {
    const source = video.querySelector(
      "source[data-src]",
    );

    if (!source) return;

    source.src = source.dataset.src;
    source.removeAttribute("data-src");

    video.load();
    video.play().catch(() => {});
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          loadVideo(entry.target);
          currentObserver.unobserve(
            entry.target,
          );
        });
      },
      {
        rootMargin: "250px 0px",
      },
    );

    lazyVideos.forEach((video) => {
      observer.observe(video);
    });
  } else {
    lazyVideos.forEach(loadVideo);
  }
})();