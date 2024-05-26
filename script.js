const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (!taskInput.value.trim()) {
		return;
	}
	const taskItem = document.createElement('li');
	taskItem.classList.add('task-item');
	const taskText = document.createElement('span');
	taskText.classList.add('task-text');
	taskText.textContent = taskInput.value.trim();
	taskItem.appendChild(taskText);
	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete-btn');
	deleteBtn.textContent = 'Delete';
	taskItem.appendChild(deleteBtn);
	taskList.appendChild(taskItem);
	taskInput.value = '';
});

taskList.addEventListener('click', function(event) {
	if (event.target.classList.contains('delete-btn')) {
		const taskItem = event.target.parentNode;
		taskList.removeChild(taskItem);
	}
});