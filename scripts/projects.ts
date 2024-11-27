// Define the Project type
interface Project {
    title: string;
    description: string;
    url: string;
    type: string;
}

// Fetch and render projects
async function fetchAndRenderProjects() {
    const response = await fetch('./src/data/projects.json');
    if (!response.ok) {
        console.error(`Failed to load projects: ${response.status}`);
        return;
    }

    // Parse JSON data
    const projects: Project[] = await response.json();

    // Get the projects container
    const projectsContainer = document.getElementById('projects-grid');
    if (!projectsContainer) {
        console.error("Projects container not found!");
        return;
    }

    // Render each project
    projects.forEach((project) => {
        // Create project card
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        // Add project title
        const title = document.createElement('h2');
        title.className = 'project-title';
        title.textContent = project.title;

        // Add project description
        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;

        // Add project link
        const link = document.createElement('a');
        link.className = 'project-link';
        link.href = project.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = project.type;

        // Append elements to project card
        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(link);

        // Append project card to the container
        projectsContainer.appendChild(projectCard);
    });
}

// Call the function on page load
window.onload = fetchAndRenderProjects;
