// ========================
// ЕДИНЫЙ DOMContentLoaded
// ========================
document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Навигация ---
  const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');

  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Инициализация стиля при загрузке
  }

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      alert('Мобильное меню! Чтобы добавить настоящее меню — скажите.');
    });
  }

  // --- 2. Hero Section ---
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }

  // Кнопка "Получить демо"
  document.getElementById('demo-button')?.addEventListener('click', () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  // --- 3. Анимации секций ---
  initBenefitsSection();
  initStatsAnimation();
  initFeaturesAnimation();
  initHowItWorksAnimation();
  initTestimonialsAnimation();
  observeTrustSection();
  observeCTASection();

  // --- 4. Footer ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- 5. Кнопка "Наверх" ---
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    const toggleScrollButton = () => {
      scrollToTopBtn.classList.toggle('visible', window.scrollY > 500);
    };
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    window.addEventListener('scroll', toggleScrollButton);
    scrollToTopBtn.addEventListener('click', scrollToTop);
    toggleScrollButton(); // Проверка при загрузке
  }
});

// ========================
// ФУНКЦИИ АНИМАЦИЙ (НЕ ТРОГАТЬ)
// ========================

function initBenefitsSection() {
  document.querySelectorAll('.benefit-card').forEach(card => {
    const color = card.dataset.color;
    if (color) {
      const wrapper = card.querySelector('.benefit-icon-wrapper');
      if (wrapper) {
        wrapper.style.backgroundColor = color + '20';
        const icon = wrapper.querySelector('svg');
        if (icon) icon.style.color = color;
      }
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = parseInt(card.dataset.index || '0', 10);
        setTimeout(() => card.classList.add('fade-in'), index * 200);
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.benefit-card').forEach(card => observer.observe(card));

  const header = document.querySelector('.benefits-section .section-header');
  if (header && !header.classList.contains('animated')) {
    const headerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.style.opacity = '0';
          header.style.transform = 'translateY(20px)';
          header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
            header.classList.add('animated');
          }, 100);
          headerObserver.unobserve(header);
        }
      });
    }, { threshold: 0.1 });
    headerObserver.observe(header);
  }
}

function initStatsAnimation() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = parseInt(card.dataset.index || '0', 10);
        setTimeout(() => card.classList.add('fade-in'), index * 100);
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.stat-card').forEach(card => observer.observe(card));
}

function initFeaturesAnimation() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = parseInt(card.dataset.index || '0', 10);
        setTimeout(() => card.classList.add('fade-in'), index * 150);
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.feature-card').forEach(card => observer.observe(card));

  const header = document.querySelector('.section-header');
  if (header) {
    const headerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.style.opacity = '0';
          header.style.transform = 'translateY(20px)';
          header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
          }, 100);
          headerObserver.unobserve(header);
        }
      });
    }, { threshold: 0.1 });
    headerObserver.observe(header);
  }
}

function initHowItWorksAnimation() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = parseInt(card.dataset.index || '0', 10);
        setTimeout(() => card.classList.add('fade-in'), index * 150);
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.step-card').forEach(card => observer.observe(card));

  const header = document.querySelector('.how-it-works-section .section-header');
  if (header && !header.classList.contains('animated')) {
    const headerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.style.opacity = '0';
          header.style.transform = 'translateY(20px)';
          header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
            header.classList.add('animated');
          }, 100);
          headerObserver.unobserve(header);
        }
      });
    }, { threshold: 0.1 });
    headerObserver.observe(header);
  }
}

function initTestimonialsAnimation() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = parseInt(card.dataset.index || '0', 10);
        setTimeout(() => card.classList.add('fade-in'), index * 200);
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.testimonial-card').forEach(card => observer.observe(card));

  const header = document.querySelector('.testimonials-section .section-header');
  if (header && !header.classList.contains('animated')) {
    const headerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.style.opacity = '0';
          header.style.transform = 'translateY(20px)';
          header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
            header.classList.add('animated');
          }, 100);
          headerObserver.unobserve(header);
        }
      });
    }, { threshold: 0.1 });
    headerObserver.observe(header);
  }
}

function observeTrustSection() {
  const section = document.getElementById('trust');
  if (!section) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !section.classList.contains('animated')) {
        initTrustSection();
        section.classList.add('animated');
        observer.unobserve(section);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(section);
}

function initTrustSection() {
  const header = document.querySelector('.trust-section .section-header');
  if (header && !header.classList.contains('animated')) {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
      header.classList.add('animated');
    }, 100);
  }

  const logosContainer = document.querySelector('.logos-container');
  if (logosContainer) {
    setTimeout(() => {
      logosContainer.classList.add('visible');
      document.querySelectorAll('.logo-item').forEach((item, index) => {
        setTimeout(() => item.classList.add('visible'), index * 100);
      });
    }, 300);
  }

  const caseCard = document.querySelector('.case-study-card');
  if (caseCard) {
    setTimeout(() => caseCard.classList.add('visible'), 400);
  }
}

function observeCTASection() {
  const section = document.getElementById('contact');
  if (!section) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !section.classList.contains('animated')) {
        initCTASection();
        section.classList.add('animated');
        observer.unobserve(section);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(section);
}

function initCTASection() {
  const form = document.getElementById('demo-form');
  const successMessage = document.getElementById('success-message');
  if (!form || !successMessage) return;

  const header = document.querySelector('.cta-section .section-header');
  if (header && !header.classList.contains('animated')) {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
      header.classList.add('animated');
    }, 100);
  }

  const formContainer = document.querySelector('.cta-form-container');
  if (formContainer) {
    formContainer.style.opacity = '0';
    formContainer.style.transform = 'scale(0.95)';
    formContainer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      formContainer.style.opacity = '1';
      formContainer.style.transform = 'scale(1)';
    }, 200);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.closest('.form-content').classList.add('hidden');
    successMessage.classList.remove('hidden');
    successMessage.classList.add('visible');

    setTimeout(() => {
      successMessage.classList.remove('visible');
      setTimeout(() => {
        successMessage.classList.add('hidden');
        form.closest('.form-content').classList.remove('hidden');
        form.reset();
      }, 300);
    }, 3000);
  });
}

// Dashboard Modal Logic (FIXED)

document.addEventListener('DOMContentLoaded', () => {
  const dashboardModal = document.getElementById('dashboard-modal');
  const openDashboardBtn = document.getElementById('open-demo-btn'); // ← ваша кнопка
  const closeDashboardBtn = document.getElementById('close-dashboard');

  if (openDashboardBtn && dashboardModal) {
    openDashboardBtn.addEventListener('click', () => {
      dashboardModal.classList.add('visible');
    });
  }

  if (closeDashboardBtn && dashboardModal) {
    closeDashboardBtn.addEventListener('click', () => {
      dashboardModal.classList.remove('visible');
    });
  }

  // Close on click outside
  if (dashboardModal) {
    dashboardModal.addEventListener('click', (e) => {
      if (e.target === dashboardModal) {
        dashboardModal.classList.remove('visible');
      }
    });
  }
});