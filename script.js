document.addEventListener('DOMContentLoaded', async () => {
    const projectContainer = document.getElementById('projects');
  
    if (projectContainer) {
      try {
        const response = await fetch('https://api.github.com/users/weirdly0/repos');
        const repos = await response.json();
        
        // Filter or sort as desired, for example, sort by updated date
        repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  
        // Display top 6 repos or all
        const displayedRepos = repos.slice(0, 6);
  
        displayedRepos.forEach(repo => {
          const div = document.createElement('div');
          div.className = 'project-item';
  
          div.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available.'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
          `;
          projectContainer.appendChild(div);
        });
      } catch (err) {
        projectContainer.innerHTML = '<p>Failed to load projects.</p>';
      }
    }
  });
  