/**
 * Main JavaScript for Portfolio Homepage
 * Handles dynamic loading of projects from JSON
 */

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

/**
 * Load projects from JSON file and render them
 */
async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        renderProjects(data.projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projects-grid').innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
                <p>Unable to load projects. Please try again later.</p>
            </div>
        `;
    }
}

/**
 * Render project cards to the grid
 * @param {Array} projects - Array of project objects
 */
function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
   
    grid.innerHTML = projects.map((project) => `
        <article class="project-card" onclick="navigateToProject('${project.id}')">
            <div class="project-image-container">
                <img
                    src="${project.image}"
                    alt="${project.title}"
                    class="project-image"
                    onerror="this.src='https://via.placeholder.com/600x300/1a1d21/5fb4a2?text=${encodeURIComponent(project.title)}'"
                >
            </div>
            <div class="project-info">
                <div class="project-meta">
                    <span class="read-time">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${project.readTime}
                    </span>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </article>
    `).join('');
}

/**
 * Navigate to project detail page
 * @param {string} projectId - The project ID
 */
function navigateToProject(projectId) {
    window.location.href = `project.html?id=${projectId}`;
}