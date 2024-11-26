// Function to open the modal and populate links
function openModal(name) {
  const gifPacks = document.querySelectorAll('.gif-pack');
  gifPacks.forEach(pack => {
    const packName = pack.getAttribute('data-name');
    if (packName === name) {
      const links = JSON.parse(pack.getAttribute('data-links'));
      document.getElementById('modal-name').innerText = name;
      const modalLinksList = document.getElementById('modal-links-list');
      modalLinksList.innerHTML = '';
      links.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="material-icons">link</span><a href="${link.url}" target="_blank">${link.text}</a>`;
        modalLinksList.appendChild(li);
      });
      document.getElementById('myModal').style.display = 'block';
    }
  });
}

// Close modal when clicking on the close button (cancel icon)
document.querySelector('.close').onclick = function() {
  document.getElementById('myModal').style.display = 'none';
};

// Disable closing modal by clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    // Do nothing, modal won't close
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Get filter elements
  const filterNameInput = document.getElementById('filter-name');
  const filterGenderSelect = document.getElementById('filter-gender');
  const filterYearInput = document.getElementById('filter-year');
  const filterEthnicityInput = document.getElementById('filter-ethnicity');
  const filterHairColorInput = document.getElementById('filter-hair-color');
  const filterEyeColorInput = document.getElementById('filter-eye-color');

  // Get all gif packs
  const gifPacks = document.querySelectorAll('.gif-pack');

  // Function to filter gif packs based on inputs
  function filterGifPacks() {
    const filterName = filterNameInput.value.toLowerCase();
    const filterGender = filterGenderSelect.value.toLowerCase();
    const filterYear = filterYearInput.value;
    const filterEthnicity = filterEthnicityInput.value.toLowerCase();
    const filterHairColor = filterHairColorInput.value.toLowerCase();
    const filterEyeColor = filterEyeColorInput.value.toLowerCase();

    gifPacks.forEach(pack => {
      // Extract data attributes
      const name = pack.getAttribute('data-name').toLowerCase();
      const gender = pack.getAttribute('data-gender').toLowerCase();
      const year = pack.getAttribute('data-year');
      const ethnicity = pack.getAttribute('data-ethnicity').toLowerCase();
      const hairColor = pack.getAttribute('data-hair-color').toLowerCase();
      const eyeColor = pack.getAttribute('data-eye-color').toLowerCase();

      // Check each filter condition
      const matchesName = !filterName || name.includes(filterName);
      const matchesGender = !filterGender || gender === filterGender;
      const matchesYear = !filterYear || year === filterYear;
      const matchesEthnicity = !filterEthnicity || ethnicity.includes(filterEthnicity);
      const matchesHairColor = !filterHairColor || hairColor.includes(filterHairColor);
      const matchesEyeColor = !filterEyeColor || eyeColor.includes(filterEyeColor);

      // Show or hide based on all conditions
      if (matchesName && matchesGender && matchesYear && matchesEthnicity && matchesHairColor && matchesEyeColor) {
        pack.style.display = 'block';
      } else {
        pack.style.display = 'none';
      }
    });
  }

  // Add event listeners to filter inputs
  filterNameInput.addEventListener('input', filterGifPacks);
  filterGenderSelect.addEventListener('change', filterGifPacks);
  filterYearInput.addEventListener('input', filterGifPacks);
  filterEthnicityInput.addEventListener('input', filterGifPacks);
  filterHairColorInput.addEventListener('input', filterGifPacks);
  filterEyeColorInput.addEventListener('input', filterGifPacks);
});
