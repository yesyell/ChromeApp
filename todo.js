// 3. 로컬 스토리지를 사용한 투두리스트
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      tasks[index].completed = checkbox.checked;
      saveTasks();
    });
    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    if (task.completed) {
      taskText.style.textDecoration = 'line-through';
    }
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskButton.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    saveTasks();
    taskInput.value = '';
    renderTasks();
  }
});

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  renderTasks();
}