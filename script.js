
const PORTFOLIO_DATA = {
  skills: ['Javascript', 'Typescript', 'Python', 'C#', 'React', 'Next.JS', 'TailwindCSS', 'ShadcnUI', 'Framer Motion', 'GSAP', 'Node.JS', 'Express.JS', 'NestJS', 'FastAPI', '.NET web API', 'PostgreSQL', 'MySQL', 'ORMs'],

  experience: [
    {
      company: 'Infotraid Technology',
      role: 'Software Engineer',
      period: 'February 2023 — Present',
      description: 'Worked on full-stack web applications, handling development, deployment, and application design'
    },
    {
      company: 'Krimal Tech',
      role: 'Full Stack Developer',
      period: 'January 2024 — February 2025',
      description: 'Built and maintained both frontend user interfaces and backend APIs for web applications'
    },
    {
      company: 'Omistics Technology',
      role: 'Frontend Developer',
      period: 'July 2023 — January 2024',
      description: 'Developed and maintained responsive user interface using ReactJS.'
    }
  ],

  projects: [
    {
      title: 'The Khwopa - An E-Commerce Platform',
      description: 'A full-featured ecommerce website with frontend and admin panel for catalog and order management.',
      tags: ['NextJS', 'Node.js', 'Express.JS', 'PostgreSQL', 'Stripe', 'Prisma ORM'],
      link: 'thekhwopa.com'
    },
    {
      title: 'AI-Powered Consultancy Chatbot (RAG-Based)',
      description: 'A RAG-based chatbot for education consultancies that helps users explore countries, universities, courses, and tuition fees through natural language queries, providing accurate, data-backed responses',
      tags: ['Python', 'FastAPI', 'SQL Alchemy', 'PostgresSQl', 'Chroma DB']
    },
    {
      title: 'Document & Enquiry Management System',
      description: 'System for managing student enquiries and documents for consultancies, including role-based access control and workflow for converting enquiries into student records',
      tags: ['NextJS', 'Shadcn UI', 'Express.JS', 'PostgreSQL']
    },
    {
      title: 'CMS Style Admin Dashboard',
      description: 'CMS-style admin dashboard with dynamic content management, file handling, and a basic public frontend for general business websites.',
      tags: ['Next.js', 'Shadcn UI', 'PostgreSQL', 'Express.JS']
    }
  ]
};

const defaultConfig = {
  hero_name: 'Rushan Buyo',
  hero_title: 'Software Engineer',
  hero_tagline: 'Building thoughtful digital experiences with clean code and modern technologies.',
  about_text: "I'm a software engineer with a passion for creating elegant solutions to complex problems. With experience across the full stack, I enjoy working on projects that challenge me to learn and grow.",
  contact_email: 'rushan@example.com',
  contact_location: 'San Francisco, CA',
  primary_color: '#d4a574',
  background_color: '#0a0a0a',
  text_color: '#e8e8e8',
  secondary_text_color: '#888888',
  card_color: '#080808'
};

let config = { ...defaultConfig };

// Render Functions
function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = PORTFOLIO_DATA.skills.map(skill =>
    `<span class="skill-tag px-4 py-2 rounded-full text-sm text-[#aaa] transition-all hover:text-[#e8e8e8] hover:border-[#333]">${skill}</span>`
  ).join('');
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  container.innerHTML = PORTFOLIO_DATA.experience.map((exp, index) => `
        <div class="card rounded-2xl p-8 transition-all duration-300 parallax-layer" data-speed="${0.01 + index * 0.005}">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h3 class="font-serif text-2xl text-[#e8e8e8]">${exp.company}</h3>
              <p class="text-[#d4a574]">${exp.role}</p>
            </div>
            <p class="text-[#666] text-sm">${exp.period}</p>
          </div>
          <p class="text-[#888]">${exp.description}</p>
        </div>
      `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = PORTFOLIO_DATA.projects.map((project, index) => `
        <div class="card rounded-2xl p-8 transition-all duration-300 group parallax-layer" data-speed="${0.01 + index * 0.008}">
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-serif text-2xl text-[#e8e8e8] group-hover:text-[#d4a574] transition-colors">${project.title}</h3>
            <svg class="text-[#444] group-hover:text-[#d4a574] transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
          <p class="text-[#888] mb-6">${project.description}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            ${project.tags.map(tag => `<span class="text-xs text-[#666] px-3 py-1 rounded-full border border-[#222]">${tag}</span>`).join('')}
          </div>
          ${project.link ? `<a href="${project.link}" class="px-6 py-2.5 rounded-lg bg-[#d4a574] text-[#0a0a0a] font-medium text-sm hover:bg-[#e8c9a8] transition-colors cursor-pointer">View Demo</a>` : ''}
        </div>
      `).join('');
}

// Parallax Effect
function initParallax() {
  const wrapper = document.getElementById('app-wrapper');
  const layers = document.querySelectorAll('.parallax-layer');

  wrapper.addEventListener('scroll', () => {
    const scrolled = wrapper.scrollTop;

    layers.forEach(layer => {
      const speed = parseFloat(layer.dataset.speed) || 0.02;
      const yPos = -(scrolled * speed);
      layer.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Smooth scroll for navigation
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Apply config to UI
async function onConfigChange(cfg) {
  config = { ...defaultConfig, ...cfg };

  document.getElementById('hero-name').textContent = config.hero_name || defaultConfig.hero_name;
  document.getElementById('hero-tagline').textContent = config.hero_tagline || defaultConfig.hero_tagline;
  document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
  document.getElementById('contact-email').textContent = config.contact_email || defaultConfig.contact_email;
  document.getElementById('contact-email-link').href = `mailto:${config.contact_email || defaultConfig.contact_email}`;
  document.getElementById('contact-location').textContent = config.contact_location || defaultConfig.contact_location;

  // Update initials in nav
  const nameParts = (config.hero_name || defaultConfig.hero_name).split(' ');
  const initials = nameParts.map(n => n[0]).join('').slice(0, 2);
  document.getElementById('nav-name').textContent = initials;

  // Apply colors
  const primaryColor = config.primary_color || defaultConfig.primary_color;
  document.documentElement.style.setProperty('--primary', primaryColor);

  // Update primary color elements
  document.querySelectorAll('.text-\\[\\#d4a574\\]').forEach(el => {
    el.style.color = primaryColor;
  });
}

function mapToCapabilities(cfg) {
  return {
    recolorables: [
      {
        get: () => cfg.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => cfg.card_color || defaultConfig.card_color,
        set: (value) => {
          config.card_color = value;
          window.elementSdk.setConfig({ card_color: value });
        }
      },
      {
        get: () => cfg.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => cfg.primary_color || defaultConfig.primary_color,
        set: (value) => {
          config.primary_color = value;
          window.elementSdk.setConfig({ primary_color: value });
        }
      },
      {
        get: () => cfg.secondary_text_color || defaultConfig.secondary_text_color,
        set: (value) => {
          config.secondary_text_color = value;
          window.elementSdk.setConfig({ secondary_text_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => cfg.font_family || "'DM Sans', system-ui, sans-serif",
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => cfg.font_size || 16,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(cfg) {
  return new Map([
    ['hero_name', cfg.hero_name || defaultConfig.hero_name],
    ['hero_title', cfg.hero_title || defaultConfig.hero_title],
    ['hero_tagline', cfg.hero_tagline || defaultConfig.hero_tagline],
    ['about_text', cfg.about_text || defaultConfig.about_text],
    ['contact_email', cfg.contact_email || defaultConfig.contact_email],
    ['contact_location', cfg.contact_location || defaultConfig.contact_location]
  ]);
}

// Initialize
renderSkills();
renderExperience();
renderProjects();
initParallax();
initSmoothScroll();

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}
