const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

function createTaskElement(task) {

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = task.id;

    const mainContainer = document.createElement('div');
    mainContainer.className = 'task-item__main-container';

    const mainContent = document.createElement('div');
    mainContent.className = 'task-item__main-content';

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox-form__checkbox';
    checkbox.type = 'checkbox';
    checkbox.id = `task-${task.id}`;
    checkbox.checked = task.completed;

    const label = document.createElement('label');
    label.htmlFor = `task-${task.id}`;

    const taskText = document.createElement('span');
    taskText.className = 'task-item__text';
    taskText.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.textContent = 'Удалить';

    checkboxForm.append(checkbox, label);
    mainContent.append(checkboxForm, taskText);
    mainContainer.append(mainContent, deleteButton);
    taskItem.append(mainContainer);

    return taskItem;
}

const tasksList = document.querySelector('.tasks-list');

const fragment = document.createDocumentFragment();

tasks.forEach(task => {
    fragment.append(createTaskElement(task));
});

tasksList.append(fragment);
