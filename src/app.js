import Project from './project';
import showProject from './dom';

const btnNewProject = document.querySelector('#project');
const dialogProject = document.querySelector('#project-dialog');
const btnConfirm = document.querySelector('#confirm');
const btnCancel = document.querySelector('#cancel');

function createNewProject() {
    dialogProject.showModal();

    btnCancel.addEventListener('click', () => {
        dialogProject.cl
    })
}

btnNewProject.addEventListener('click', createNewProject);
btnNewTask.addEventListener('click', createNewTask);

btnConfirm.addEventListener('click', () => {
    const inputName = document.querySelector('input#name-p');
    const inputDesc = document.querySelector('input#description-p');
    const newProject = new Project(inputName.value, inputDesc.value);
        
    showProject(newProject);
});