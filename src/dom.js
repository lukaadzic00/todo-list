export function showProject(project, projectArr) {
    const container = document.querySelector('#project-container');

    const card = document.createElement('div');
    card.classList.add('card');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    heading.textContent = project.name;
    para.textContent = project.description;

    card.appendChild(heading);
    card.appendChild(para);
    container.appendChild(card);

    card.addEventListener('click', () => {
        for(const project of projectArr) {
            project.selected = false;
        }

        const cards = container.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('selected');
        })

        project.selected = true;
        card.classList.add('selected');        
    });
}

export function showAllTasksInProject(project) {
    const container = document.querySelector('#task-container');

    project.tasks.forEach(task => {
        const card = document.createElement('div');
        const heading = document.createElement('h3');
        const para = document.createElement('p');

        heading.textContent = task
    })
}