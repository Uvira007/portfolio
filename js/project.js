/**
 * Project Detail Page JavaScript
 * Handles dynamic loading of project content with numbered TOC
 */

document.addEventListener('DOMContentLoaded', () => {
    loadProjectDetails();
});

/**
 * Get project ID from URL parameters
 */
function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

/**
 * Load project details from JSON
 */
async function loadProjectDetails() {
    const projectId = getProjectId();
   
    if (!projectId) {
        showError('No project specified');
        return;
    }
   
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        const project = data.projects.find(p => p.id === projectId);
       
        if (!project) {
            showError('Project not found');
            return;
        }
       
        document.title = `${project.title} | Portfolio`;
        renderProjectHeader(project);
        renderTableOfContents(project.sections);
        renderProjectContent(project);
       
    } catch (error) {
        console.error('Error loading project:', error);
        showError('Failed to load project details');
    }
}

/**
 * Render the project header section
 */
function renderProjectHeader(project) {
    const header = document.getElementById('project-header');
   
    header.innerHTML = `
        <img
            src="${project.image}"
            alt="${project.title}"
            class="project-header-image"
            onerror="this.src='https://via.placeholder.com/900x400/1a1d21/5fb4a2?text=${encodeURIComponent(project.title)}'"
        >
        <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <h1 class="project-title">${project.title}</h1>
        <div class="read-time">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${project.readTime}
        </div>
        <p class="project-description">${project.description}</p>
    `;
}

/**
 * Render the table of contents with numbered sections
 */
function renderTableOfContents(sections) {
    const tocNav = document.getElementById('toc-nav');
   
    function renderSection(section, index) {
        const sectionNum = String(index).padStart(2, '0');
        let html = `<li>
            <a href="#${section.id}">${sectionNum}. ${section.title}</a>`;
       
        if (section.subsections && section.subsections.length > 0) {
            html += '<ul>';
            section.subsections.forEach(sub => {
                html += `<li><a href="#${sub.id}">${sub.title}</a></li>`;
            });
            html += '</ul>';
        }
       
        html += '</li>';
        return html;
    }
   
    tocNav.innerHTML = `<ul>${sections.map((s, i) => renderSection(s, i)).join('')}</ul>`;
}

/**
 * Render the main project content
 */
function renderProjectContent(project) {
    const article = document.getElementById('project-article');
   
    function renderSectionContent(section, index) {
        const sectionNum = String(index).padStart(2, '0');
        let html = `
            <section id="${section.id}">
                <h2>${sectionNum}. ${section.title}</h2>
                ${section.content || ''}
        `;
       
        if (section.subsections && section.subsections.length > 0) {
            section.subsections.forEach(sub => {
                html += `
                    <div id="${sub.id}">
                        <h3>${sub.title}</h3>
                        ${sub.content || ''}
                    </div>
                `;
            });
        }
       
        html += '</section>';
        return html;
    }
   
    article.innerHTML = project.sections.map((s, i) => renderSectionContent(s, i)).join('');
   
    // Setup smooth scroll for TOC links
    setupSmoothScroll();
}

/**
 * Setup smooth scrolling for TOC links
 */
function setupSmoothScroll() {
    document.querySelectorAll('.toc-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Show error message
 */
function showError(message) {
    document.getElementById('project-header').innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem;">
            <h1 style="color: var(--accent-primary); margin-bottom: 1rem; font-family: var(--font-heading);">Oops!</h1>
            <p style="color: var(--text-muted);">${message}</p>
            <a href="index.html" style="color: var(--accent-teal); margin-top: 1rem; display: inline-block;">
                ← Return to Portfolio
            </a>
        </div>
    `;
    document.getElementById('toc-section').style.display = 'none';
    document.getElementById('project-article').style.display = 'none';
}
 