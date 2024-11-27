"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Fetch and render projects
function fetchAndRenderProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://dlittl02.github.io/.idea/data/projects.json');
        if (!response.ok) {
            console.error(`Failed to load projects: ${response.status}`);
            return;
        }
        // Parse JSON data
        const projects = yield response.json();
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
    });
}
// Call the function on page load
window.onload = fetchAndRenderProjects;
