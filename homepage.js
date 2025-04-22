fetch('data/index.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('homepage-title').textContent = data.title;
    document.getElementById('homepage-description').textContent = data.description;

    const featuredSection = document.getElementById('featured-listings');
    data.featured.forEach(listing => {
      const card = document.createElement('div');
      card.className = 'listing-card';
      card.innerHTML = `
        <img src="${listing.image}" alt="${listing.title}">
        <h3>${listing.title}</h3>
        <p>${listing.description}</p>
      `;
      featuredSection.appendChild(card);
    });
  });