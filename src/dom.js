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

function calculateDays(task) {
    const dueDate = new Date(task.date);
    const today = new Date();

    dueDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const msDiff = dueDate - today;
    const days = Math.ceil(msDiff / (1000 * 60 * 60 * 24));

    if (days > 0) {
        return `You have ${days} day(s) left.`;
    } else if (days === 0) {
        return "The task is due today!";
    } else {
        return `The deadline was ${Math.abs(days)} day(s) ago.`;
    }
}

function makePrioritySpan(task) {
    const prioSpan = document.createElement('span');

    if(task.priority === 'low') {
        prioSpan.textContent = "Low";
        prioSpan.style.backgroundColor = 'green';
    } else if(task.priority === 'medium') {
        prioSpan.textContent = "Medium";
        prioSpan.style.backgroundColor = 'yellow'
    } else if(task.priority === 'high') {
        prioSpan.textContent = "High";
        prioSpan.style.backgroundColor = 'red';
    }

    return prioSpan;
}

function createTaskCard(project, task) {
    const card = document.createElement('div');
    const heading = document.createElement('h3');
    const para = document.createElement('p');
    const delBtn = document.createElement('button');
    const dateDiv = document.createElement('div');
    let prioSpan;

    heading.textContent = task.name;
    para.textContent = task.description;
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delete-t');
    dateDiv.textContent = calculateDays(task);
    prioSpan = makePrioritySpan(task);

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

    card.append(heading, para, dateDiv , prioSpan ,delBtn);

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