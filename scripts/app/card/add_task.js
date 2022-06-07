const add_task = (a) =>{

    const newtask_value = document.getElementById(`add-task-input${a}`).value
    const last_tasklist_html = document.getElementById(`task-list${a}`).innerHTML
    if(newtask_value !== ''){

        document.getElementById(`task-list${a}`).innerHTML = last_tasklist_html + task()
    }
}