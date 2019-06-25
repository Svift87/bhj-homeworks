let tasksInput = document.querySelector('.tasks__input'),
    tasksAdd = document.querySelector('.tasks__add'),
    tasksList = document.querySelector('.tasks__list');

tasksAdd.addEventListener('click', function(){
    event.preventDefault();   
    if (tasksInput.value != '') {
        tasksList.insertAdjacentHTML('beforeEnd', `
        <div class="task">
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `);
    };
    tasksInput.value = '';
    let task = document.querySelectorAll('.task'),
        taskRemove = tasksList.querySelectorAll('.task__remove');

    for (let i = 0; taskRemove.length > i;i++) {
        taskRemove[i].addEventListener('click', function(){
            task[i].remove();
        })
    } 
});