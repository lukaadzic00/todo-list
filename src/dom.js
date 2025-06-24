export function showProject(card) {
    const container = document.querySelector('#project-container');
    container.appendChild(card);
}

export function createProjectCard(project, projectArr) {
    const card = document.createElement('div');
    card.classList.add('card');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    heading.textContent = project.name;
    para.textContent = project.description;

    card.appendChild(heading);
    card.appendChild(para);

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

        showAllTasksInProject(project);
    });

    return card;
}

function createTaskCard(project, task) {
    const card = document.createElement('div');
    const heading = document.createElement('h3');
    const para = document.createElement('p');
    const delBtn = document.createElement('button');

    heading.textContent = task.name;
    para.textContent = task.description;
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delete-t');

    delBtn.addEventListener('click', (e) => {
        let i = 0;
        const container = document.querySelector('#task-container');
        const cards = Array.from(container.children);
        const clickedCard = e.target.closest('div');

        const index = cards.indexOf(clickedCard);
        if (index !== -1) {
            project.tasks.splice(index, 1);
            clickedCard.remove();
        }
    });

    card.append(heading, para, delBtn);

    return card;
}

export function showAllTasksInProject(project) {
    const container = document.querySelector('#task-container');
    container.innerHTML = '';

    project.tasks.forEach(task => {
        const card = createTaskCard(project, task);
        container.appendChild(card);
    })
}