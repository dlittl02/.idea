// Fetch and display interests dynamically from the hosted JSON file
fetch('https://dlittl02.github.io/.idea/data/interests.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const interestsGrid = document.getElementById('interests-grid');

        data.interests.forEach(interest => {
            // Create interest item container
            const interestItem = document.createElement('div');
            interestItem.classList.add('interest-item');

            // Add title and description
            const title = document.createElement('h2');
            title.textContent = interest.title;

            const description = document.createElement('p');
            description.textContent = interest.description;

            // Append to interest item
            interestItem.appendChild(title);
            interestItem.appendChild(description);

            // Append to grid
            interestsGrid.appendChild(interestItem);
        });
    })
    .catch(error => console.error('Error loading interests:', error));
