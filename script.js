function showProject(project) {
    const projectContent = {
        excel: `<h2>Excel Project</h2><p>Details about your Excel project go here.</p>`,
        sql: `<h2>SQL Project</h2><p>Details about your SQL project go here.</p>`,
        python: `<h2>Python Project</h2><p>Details about your Python project go here.</p>`,
        dashboard: `<h2>Dashboard Project</h2><p>Details about your Dashboard project go here.</p>`
    };
    
    document.getElementById('project-content').innerHTML = projectContent[project];
    document.getElementById('project-details').classList.remove('hidden');
}

function hideProject() {
    document.getElementById('project-details').classList.add('hidden');
}
