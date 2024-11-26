document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const closeBtn = modal.querySelector('.close');
    const modalFcName = modal.querySelector('.modal-fc-name');
    const modalLinks = modal.querySelector('.modal-links');
    
    const filters = {
        gender: document.getElementById('genderFilter'),
        decade: document.getElementById('decadeFilter'),
        eyeColor: document.getElementById('eyeColorFilter'),
        hairColor: document.getElementById('hairColorFilter'),
        ethnicity: document.getElementById('ethnicityFilter'),
        gifCount: document.getElementById('gifCountFilter'),
    };
    
    // Filtering function
    function filterCards() {
        cards.forEach(card => {
            const gender = filters.gender.value;
            const decade = filters.decade.value;
            const eyeColor = filters.eyeColor.value;
            const hairColor = filters.hairColor.value;
            const ethnicity = filters.ethnicity.value;
            const minGifCount = filters.gifCount.value;

            const cardData = {
                gender: card.dataset.gender,
                decade: card.dataset.decade,
                eyeColor: card.dataset.eyecolor,
                hairColor: card.dataset.haircolor,
                ethnicity: card.dataset.ethnicity,
                gifCount: parseInt(card.dataset.gifcount, 10)
            };
            
            const matchesGender = !gender || cardData.gender === gender;
            const matchesDecade = !decade || cardData.decade === decade;
            const matchesEyeColor = !eyeColor || cardData.eyeColor === eyeColor;
            const matchesHairColor = !hairColor || cardData.hairColor === hairColor;
            const matchesEthnicity = !ethnicity || cardData.ethnicity === ethnicity;
            const matchesGifCount = !minGifCount || cardData.gifCount >= minGifCount;

            if (matchesGender && matchesDecade && matchesEyeColor && matchesHairColor && matchesEthnicity && matchesGifCount) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Add event listeners to filters
    Object.values(filters).forEach(filter => {
        filter.addEventListener('change', filterCards);
        filter.addEventListener('keyup', filterCards);
    });

    // Modal functionality
    cards.forEach(card => {
        card.querySelector('.fc-name, img').addEventListener('click', function() {
            const fcName = card.querySelector('.fc-name').textContent;
            modalFcName.textContent = fcName;

            // Example: Populate the modal with links
            modalLinks.innerHTML = `
                <li><span class="material-icons">link</span> <a href="#">GIF Pack 1 for ${fcName}</a></li>
                <li><span class="material-icons">link</span> <a href="#">GIF Pack 2 for ${fcName}</a></li>
            `;

           
