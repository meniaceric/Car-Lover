import './style.css';

const cars = [
  { id: 1, name: '911 Carrera RS', make: 'Porsche', year: '1973', category: 'Classic', specs: '2.7L flat-six · 210 hp', location: 'Stuttgart, DE', caption: 'The original rear-engine rebel.', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85' },
  { id: 2, name: 'Countach LP 400', make: 'Lamborghini', year: '1974', category: 'Classic', specs: '3.9L V12 · 375 hp', location: 'Sant’Agata, IT', caption: 'Sharp edges. Loud dreams. Pure theatre.', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85' },
  { id: 3, name: 'M3 E30 Sport Evo', make: 'BMW', year: '1990', category: 'Performance', specs: '2.5L inline-six · 238 hp', location: 'Munich, DE', caption: 'A touring car legend built for Sunday roads.', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85' },
  { id: 4, name: 'A110 Première', make: 'Alpine', year: '2022', category: 'Performance', specs: '1.8L turbo · 249 hp', location: 'Dieppe, FR', caption: 'Light on its feet, unforgettable in motion.', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85' },
  { id: 5, name: 'Supra A80', make: 'Toyota', year: '1998', category: 'JDM', specs: '3.0L twin-turbo · 320 hp', location: 'Aichi, JP', caption: 'The boost builds. The legend stays.', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=85' },
  { id: 6, name: 'Skyline GT-R V-Spec', make: 'Nissan', year: '1999', category: 'JDM', specs: '2.6L twin-turbo · 276 hp', location: 'Yokohama, JP', caption: 'Godzilla, tuned for the night.', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85' },
  { id: 7, name: 'Huracán EVO', make: 'Lamborghini', year: '2020', category: 'Supercar', specs: '5.2L V10 · 631 hp', location: 'Bologna, IT', caption: 'Italian drama with a V10 soundtrack.', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=85' },
  { id: 8, name: 'GT 3 RS', make: 'Porsche', year: '2023', category: 'Supercar', specs: '4.0L flat-six · 518 hp', location: 'Weissach, DE', caption: 'Every wing has a purpose. Every corner matters.', image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85' },
  { id: 9, name: 'Mustang Fastback', make: 'Ford', year: '1967', category: 'Classic', specs: '4.7L V8 · 271 hp', location: 'Dearborn, US', caption: 'American freedom in fastback form.', image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=85' },
  { id: 10, name: 'Civic Type R', make: 'Honda', year: '2023', category: 'JDM', specs: '2.0L turbo · 315 hp', location: 'Suzuka, JP', caption: 'Front-wheel drive, zero fear.', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=85' },
  { id: 11, name: 'AMG GT Black Series', make: 'Mercedes-AMG', year: '2021', category: 'Supercar', specs: '4.0L V8 biturbo · 720 hp', location: 'Affalterbach, DE', caption: 'A blacktop storm with a racing heartbeat.', image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=85' },
  { id: 12, name: 'Giulia Quadrifoglio', make: 'Alfa Romeo', year: '2024', category: 'Performance', specs: '2.9L V6 biturbo · 505 hp', location: 'Milan, IT', caption: 'Italian soul, four-leaf confidence.', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85' },
  { id: 13, name: 'LFA', make: 'Lexus', year: '2012', category: 'Supercar', specs: '4.8L V10 · 552 hp', location: 'Toyota City, JP', caption: 'A ten-cylinder symphony in carbon fibre.', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85' },
  { id: 14, name: 'G 63 AMG', make: 'Mercedes-Benz', year: '2024', category: 'SUV', specs: '4.0L V8 biturbo · 577 hp', location: 'Graz, AT', caption: 'Boxy, bold, and built to own the road.', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=85' },
  { id: 15, name: 'RX-7 FD', make: 'Mazda', year: '1993', category: 'JDM', specs: '1.3L twin-turbo · 252 hp', location: 'Hiroshima, JP', caption: 'Small engine, giant character.', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=85' }
];

const categories = ['All cars', ...new Set(cars.map((car) => car.category))];
const savedCaptions = JSON.parse(localStorage.getItem('car-lovers-captions') || '{}');
const savedFavorites = JSON.parse(localStorage.getItem('car-lovers-favorites') || '[]');
const state = { query: '', category: 'All cars', showFavorites: false, captions: savedCaptions, favorites: new Set(savedFavorites) };

const app = document.querySelector('#app');
const icon = (name) => ({ search: '⌕', heart: '♡', heartFill: '♥', arrow: '↗', close: '×', pin: '⌖', edit: '✎' }[name]);

function filteredCars() {
  return cars.filter((car) => {
    const matchesCategory = state.category === 'All cars' || car.category === state.category;
    const haystack = `${car.name} ${car.make} ${car.category}`.toLowerCase();
    const matchesQuery = haystack.includes(state.query.toLowerCase());
    const matchesFavorite = !state.showFavorites || state.favorites.has(car.id);
    return matchesCategory && matchesQuery && matchesFavorite;
  });
}

function render() {
  const visibleCars = filteredCars();
  app.innerHTML = `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Car Lovers home"><span class="brand-mark">CL</span><span>CAR<br><em>LOVERS</em></span></a>
      <nav class="top-nav"><a href="#gallery">Collection</a><a href="#story">The journal</a><a href="#about">About</a></nav>
      <span class="creator-credit">Created by Meniac Eric</span>
      <button class="saved-button ${state.showFavorites ? 'active' : ''}" data-action="favorites"><span>${icon('heart')}</span> Saved <b>${state.favorites.size}</b></button>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> Est. 2024 · Automotive culture</p>
          <h1>Machines with<br><i>a pulse.</i></h1>
          <p class="hero-intro">A living collection of beautiful cars, unforgettable drives, and the stories that make us stop and stare.</p>
          <a class="text-link" href="#gallery">Explore the collection <span>${icon('arrow')}</span></a>
        </div>
        <div class="hero-art" aria-label="A silver sports car on a mountain road">
          <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
          <img src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1600&q=90" alt="Silver sports car on a mountain road" />
          <div class="image-note"><span>01</span><div><strong>Pure form</strong><small>Designed to be remembered</small></div></div>
        </div>
      </section>

      <section class="ticker" aria-label="Collection highlights"><span>12 icons</span><span>04 eras</span><span>08 countries</span><span>∞ reasons to drive</span></section>

      <section class="collection-section" id="gallery">
        <div class="section-heading"><div><p class="eyebrow"><span></span> The collection</p><h2>Find your <i>forever car.</i></h2></div><p class="section-copy">Every line, sound, and detail has a story. Keep the ones that speak to you.</p></div>
        <div class="controls"><div class="search-wrap"><span>${icon('search')}</span><input id="search" type="search" placeholder="Search make or model" value="${state.query}" /></div><div class="filters">${categories.map((category) => `<button class="filter ${state.category === category ? 'selected' : ''}" data-category="${category}">${category}</button>`).join('')}</div></div>
        <div class="results-meta"><span><strong>${visibleCars.length}</strong> cars in view</span><span class="results-rule"></span><span>Curated for the curious</span></div>
        <div class="car-grid">${visibleCars.length ? visibleCars.map(carCard).join('') : `<div class="empty-state"><span>⌁</span><h3>No cars found</h3><p>Try another make, model, or collection.</p></div>`}</div>
      </section>

      <section class="journal" id="story"><div class="journal-image"><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85" alt="Classic car dashboard and steering wheel" /><span>Issue no. 04</span></div><div class="journal-copy"><p class="eyebrow"><span></span> From the journal</p><h2>Why we keep<br><i>looking back.</i></h2><p>Some cars are more than engineering. They are time capsules: a shape from a favorite film, a sound from a Sunday morning, a feeling you can’t quite put into words.</p><a class="text-link" href="#about">Read the full story <span>${icon('arrow')}</span></a></div></section>
      <section class="about-band" id="about"><p class="eyebrow"><span></span> Car Lovers / 001</p><p>For the people who notice the details.</p><span class="signature">Keep driving.</span></section>
    </main>
    <footer><span>© 2024 Car Lovers Club</span><span>Created by Meniac Eric</span><span>Made for the long way home <i>↗</i></span></footer>
    <div id="modal-root"></div>`;
  bindEvents();
}

function carCard(car) {
  const caption = state.captions[car.id] || car.caption;
  return `<article class="car-card" data-id="${car.id}"><div class="car-image"><img src="${car.image}" alt="${car.year} ${car.make} ${car.name}" loading="lazy" /><div class="card-top"><span class="card-index">${String(car.id).padStart(2, '0')}</span><button class="heart-button ${state.favorites.has(car.id) ? 'liked' : ''}" data-favorite="${car.id}" aria-label="Save ${car.name}">${state.favorites.has(car.id) ? icon('heartFill') : icon('heart')}</button></div><button class="view-button" data-open="${car.id}">View details <span>${icon('arrow')}</span></button></div><div class="card-content"><div class="card-title"><div><p>${car.make}</p><h3>${car.name}</h3></div><span>${car.year}</span></div><div class="card-caption"><span>${icon('edit')}</span><input data-caption="${car.id}" value="${escapeHtml(caption)}" aria-label="Caption for ${car.name}" /></div><div class="card-meta"><span>${car.category}</span><span>${car.specs}</span></div></div></article>`;
}

function escapeHtml(value) { return value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char])); }
function persist() { localStorage.setItem('car-lovers-captions', JSON.stringify(state.captions)); localStorage.setItem('car-lovers-favorites', JSON.stringify([...state.favorites])); }
function bindEvents() {
  document.querySelector('#search')?.addEventListener('input', (event) => { state.query = event.target.value; render(); document.querySelector('#search')?.focus(); });
  document.querySelectorAll('[data-category]').forEach((button) => button.addEventListener('click', () => { state.category = button.dataset.category; render(); }));
  document.querySelector('[data-action="favorites"]')?.addEventListener('click', () => { state.showFavorites = !state.showFavorites; render(); });
  document.querySelectorAll('[data-favorite]').forEach((button) => button.addEventListener('click', (event) => { event.stopPropagation(); const id = Number(button.dataset.favorite); state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id); persist(); render(); }));
  document.querySelectorAll('[data-caption]').forEach((input) => input.addEventListener('change', (event) => { state.captions[input.dataset.caption] = event.target.value; persist(); }));
  document.querySelectorAll('[data-open]').forEach((button) => button.addEventListener('click', () => openModal(Number(button.dataset.open))));
}
function openModal(id) {
  const car = cars.find((item) => item.id === id);
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop" data-close><div class="detail-modal" role="dialog" aria-modal="true" aria-label="${car.name}" onclick="event.stopPropagation()"><button class="modal-close" data-close>${icon('close')}</button><div class="modal-image"><img src="${car.image}" alt="${car.year} ${car.make} ${car.name}" /></div><div class="modal-info"><p class="eyebrow"><span></span> ${car.category} / ${car.year}</p><h2>${car.make}<br><i>${car.name}</i></h2><p class="modal-caption">${escapeHtml(state.captions[car.id] || car.caption)}</p><div class="detail-list"><span><small>Power</small>${car.specs.split(' · ')[1]}</span><span><small>Home</small>${car.location}</span></div><button class="save-detail" data-favorite="${car.id}">${state.favorites.has(car.id) ? icon('heartFill') + ' Saved to collection' : icon('heart') + ' Save to collection'}</button></div></div></div>`;
  document.querySelectorAll('[data-close]').forEach((element) => element.addEventListener('click', (event) => { if (event.target === element || element.classList.contains('modal-close')) document.querySelector('#modal-root').innerHTML = ''; }));
  document.querySelector('.save-detail').addEventListener('click', () => { state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id); persist(); openModal(id); render(); });
}

render();
