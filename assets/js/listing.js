// Listing Detail Page Logic
document.addEventListener('DOMContentLoaded', function() {
  // Get listing ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const listingId = urlParams.get('id');

  // Fetch listing data (in production, this would be an API call)
  fetchListingData(listingId).then(listing => {
    renderListing(listing);
  });
});

async function fetchListingData(id) {
  // In production, replace with actual API call
  // For now using sample data
  return {
    id: id,
    title: "123 Maple Street",
    address: "Mississauga, ON L5M 1A1",
    beds: 4,
    baths: 2,
    sqft: 2200,
    price: "$899,000",
    description: "Beautiful 2-story detached home...",
    images: [
      "https://picsum.photos/800/600?random=5",
      "https://picsum.photos/800/600?random=6"
    ],
    features: [
      "Detached 2-story home",
      "Finished basement",
      "Double car garage"
    ]
  };
}

function renderListing(listing) {
  // Basic info
  document.getElementById('listingTitle').textContent = listing.title;
  document.getElementById('listingAddress').textContent = listing.address;
  document.getElementById('listingBeds').textContent = `${listing.beds} Bedrooms`;
  document.getElementById('listingBaths').textContent = `${listing.baths} Bathrooms`;
  document.getElementById('listingSqft').textContent = `${listing.sqft} sqft`;
  document.getElementById('listingPrice').textContent = listing.price;
  document.getElementById('listingDescription').textContent = listing.description;

  // Main image
  const mainImg = document.getElementById('mainImage');
  if (listing.images.length > 0) {
    mainImg.src = listing.images[0];
    mainImg.alt = listing.title;
  }

  // Thumbnails
  const thumbsContainer = document.querySelector('.gallery-thumbs');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = listing.images.map((img, i) => `
      <div class="cursor-pointer">
        <img src="${img}" alt="Thumbnail ${i+1}" 
             class="w-full h-full object-cover rounded"
             onclick="document.getElementById('mainImage').src='${img}'">
      </div>
    `).join('');
  }

  // Features
  const featuresContainer = document.getElementById('listingFeatures');
  if (featuresContainer) {
    featuresContainer.innerHTML = listing.features.map(feature => `
      <li class="flex items-center">
        <i class="fas fa-check text-green-500 mr-2"></i> ${feature}
      </li>
    `).join('');
  }
}