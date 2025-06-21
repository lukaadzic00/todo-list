import Project from './project';
import showProject from './dom';

function createNewProject() {
    dialogProject.showModal();
}

function confirmNewProject() {
    const inputName = document.querySelector('input#name-p');
    const inputDesc = document.querySelector('input#desc-p');
    const newProject = new Project(inputName.value, inputDesc.value);

    inputName.value = '';
    inputDesc.value = '';
        
    showProject(newProject);
}

function cancelNewProject() {
    dialogProject.close();
}



const btnNewProject = document.querySelector('#new-project');
const dialogProject = document.querySelector('#project-dialog');
const btnConfirm = document.querySelector('#confirm-p');
const btnCancel = document.querySelector('#cancel-p');

const btnNewTask = document.querySelector('#new-task');
const dialogTask = document.querySelector('#task-dialog'); 

btnNewProject.addEventListener('click', createNewProject);
btnConfirm.addEventListener('click', confirmNewProject);
btnCancel.addEventListener('click', cancelNewProject);