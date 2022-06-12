const add_task = (usename_of_user , card_id) =>{

    const newtask_value = document.getElementById(`add-task-input-${card_id}`).value
    const id_task = create_id_task(usename_of_user,card_id)

    if(newtask_value !== ''){

        const user_card_index_array = find_evrycard_of_everyuser_in_cards_array(usename_of_user,card_id)


        task_id = `${card_id}-task${id_task}`
        cards[user_card_index_array[0]].card[user_card_index_array[1]].tasks.push({"id" : task_id , "value" : newtask_value} )
    
        document.getElementById(`task-list-${card_id}`).innerHTML = task_list(usename_of_user , card_id,task_id ,newtask_value)

        document.getElementById(`add-task-input-${card_id}`).value = ''
    
    }else{
        alert("write task name")
    }
    // const last_tasklist_html = document.getElementById(`task-list${a}`).innerHTML
    // if(newtask_value !== ''){

    //     document.getElementById(`task-list${a}`).innerHTML = last_tasklist_html + task()
    // }
}