export default function showProject(project) {
    const container = document.querySelector('#project-container');

    const card = document.createElement('div');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    heading.textContent = project.name;
    para.textContent = project.description;

    card.appendChild(heading);
    card.appendChild(para);

    container.appendChild(card);
}