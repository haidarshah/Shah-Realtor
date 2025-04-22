
document.addEventListener("DOMContentLoaded", () => {
  fetch('index.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.hero-image').style.backgroundImage = `url('${data.hero.image}')`;
      document.querySelector('.hero-overlay').innerHTML = `<a href="${data.hero.ctaLink}" class="btn">${data.hero.ctaText}</a>`;
      document.getElementById('about-image').src = data.about.image;
      document.getElementById('about-text').innerText = data.about.text;
      const featuredListingsContainer = document.getElementById('featured-listings');
      data.featuredListings.forEach(listing => {
        const div = document.createElement('div');
        div.className = 'listing-card';
        div.innerHTML = `
          <a href="/listings/${listing.slug}.html">
            <img src="${listing.image}" alt="${listing.title}">
            <h3>${listing.title}</h3>
          </a>
        `;
        featuredListingsContainer.appendChild(div);
      });
    })
    .catch(error => console.error('Error loading homepage data:', error));
});
