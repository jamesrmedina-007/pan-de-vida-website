
const langButton = document.getElementById('lang-toggle');
const savedLang = localStorage.getItem('pdv-lang') || 'es';

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es][data-en]').forEach((el) => {
    el.textContent = el.dataset[lang];
  });
  langButton.textContent = lang === 'es' ? 'EN' : 'ES';
  localStorage.setItem('pdv-lang', lang);
}

langButton.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'es' ? 'en' : 'es');
});

document.querySelector('.menu-btn')?.addEventListener('click', (event) => {
  const nav = document.querySelector('.site-nav');
  nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const events = [
  {
    dateEs: 'Cada martes',
    dateEn: 'Every Tuesday',
    titleEs: 'Educación Cristiana',
    titleEn: 'Christian Education',
    time: '7:00 PM',
    descEs: 'Estudio bíblico y enseñanza para toda la familia.',
    descEn: 'Bible study and teaching for the whole family.'
  },
  {
    dateEs: 'Semanal',
    dateEn: 'Weekly',
    titleEs: 'Servicio de Adoración',
    titleEn: 'Worship Service',
    time: '7:15 PM',
    descEs: 'Adoración, oración y predicación de la Palabra.',
    descEn: 'Worship, prayer, and preaching of the Word.'
  },
  {
    dateEs: 'Anuncios',
    dateEn: 'Announcements',
    titleEs: 'Eventos especiales',
    titleEn: 'Special Events',
    time: 'Facebook + Instagram',
    descEs: 'Conferencias, juventud, Escuela Bíblica de Verano y celebraciones.',
    descEn: 'Conferences, youth gatherings, Vacation Bible School, and celebrations.'
  }
];

const eventsList = document.getElementById('events-list');
if (eventsList) {
  eventsList.innerHTML = events.map((event, index) => `
    <article class="event-card">
      <div class="event-date" data-es="${event.dateEs}" data-en="${event.dateEn}">${event.dateEs}</div>
      <div>
        <h2 data-es="${event.titleEs}" data-en="${event.titleEn}">${event.titleEs}</h2>
        <strong>${event.time}</strong>
        <p data-es="${event.descEs}" data-en="${event.descEn}">${event.descEs}</p>
      </div>
      <a class="btn secondary" href="${index === 2 ? 'https://www.instagram.com/pandevidaupci/' : 'new-here.html'}" ${index === 2 ? 'target="_blank" rel="noopener"' : ''} data-es="${index === 2 ? 'Ver anuncios' : 'Detalles'}" data-en="${index === 2 ? 'View announcements' : 'Details'}">${index === 2 ? 'Ver anuncios' : 'Detalles'}</a>
    </article>
  `).join('');
}

setLanguage(savedLang);
