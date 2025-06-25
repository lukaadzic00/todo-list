import Project from './project';
import Task from './task';
import { showProject, createProjectCard, showAllTasksInProject } from './dom';
import projectArr from './index';

export default function setupEventListeners() {
    
    function createNewProject() {
        dialogProject.showModal();
    }

    function confirmNewProject() {
        const inputName = document.querySelector('input#name-p');
        const inputDesc = document.querySelector('input#desc-p');
        const newProject = new Project(inputName.value, inputDesc.value, false);
        projectArr.push(newProject);

        inputName.value = '';
        inputDesc.value = '';
        
        const card = createProjectCard(newProject, projectArr);
        showProject(card);
    }

    function cancelNewProject() {
        dialogProject.close();
    }

    function resetTaskDialog() {
        const inputTaskName = document.querySelector('input#name-t');
        const inputTaskDesc = document.querySelector('input#desc-t');
        const inputTaskDate = document.querySelector('input#date');

        inputTaskName.value = '';
        inputTaskDesc.value = '';
        inputTaskDate.value = '';
    }

    function createNewTask() {
        dialogTask.showModal();
    }

    function confirmNewTask() {
        const inputTaskName = document.querySelector('input#name-t');
        const inputTaskDesc = document.querySelector('input#desc-t');
        const inputTaskDate = document.querySelector('input#date');
        const priority = document.querySelector('input[name="priority"]:checked')
        const newTask = new Task(inputTaskName.value, inputTaskDesc.value, inputTaskDate.value, priority.value);

        resetTaskDialog();

        let currentProject;
        for(let i = 0; i < projectArr.length; i++) {
            if(projectArr[i].selected) {
                currentProject = projectArr[i];
                break;
            }
        }

        currentProject.tasks.push(newTask);
        showAllTasksInProject(currentProject);
    }

    function cancelNewTask() {
        resetTaskDialog();
        dialogTask.close();
    }

    const btnNewProject = document.querySelector('#new-project');
    const dialogProject = document.querySelector('#project-dialog');
    const btnConfirmProject = document.querySelector('#confirm-p');
    const btnCancelProject = document.querySelector('#cancel-p');
    const btnNewTask = document.querySelector('#new-task');
    const dialogTask = document.querySelector('#task-dialog');
    const btnConfirmTask = document.querySelector('#confirm-t');
    const btnCancelTask = document.querySelector('#cancel-t');


    btnNewProject.addEventListener('click', createNewProject);
    btnConfirmProject.addEventListener('click', confirmNewProject);
    btnCancelProject.addEventListener('click', cancelNewProject);
    btnNewTask.addEventListener('click', createNewTask);
    btnConfirmTask.addEventListener('click', confirmNewTask);
    btnCancelTask.addEventListener('click', cancelNewTask);
}