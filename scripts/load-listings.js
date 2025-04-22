fetch('/data/listings')
  .then(res => res.ok ? res : Promise.reject(res))
  .then(() => {
    return fetch('/data/listings/index.json');
  })
  .then(res => res.json())
  .then(files => {
    files.forEach(file => {
      fetch(`/data/listings/${file}`)
        .then(res => res.json())
        .then(data => {
          const container = document.getElementById('all-listings');
          const html = `
            <div class="listing">
              <a href="/listings/${data.slug}.html">
                <img src="${data.images[0]}" alt="">
                <h2>${data.address}</h2>
              </a>
            </div>`;
          container.innerHTML += html;
        });
    });
  });
