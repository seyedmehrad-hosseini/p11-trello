const add_task = (usename_of_user , card_id) =>{

    const newtask_value = document.getElementById(`add-task-input-${card_id}`).value
    const id_task = create_id_task(usename_of_user,card_id)

    if(newtask_value !== ''){

        const user_card_index_array = find_evrycard_of_everyuser_in_cards_array(usename_of_user,card_id)
        console.log(`card_id send is :${card_id}`)
        console.log(user_card_index_array)
        cards[user_card_index_array[0]].card[user_card_index_array[1]].tasks.push({"id" : `task${id_task}` , "value" : newtask_value} )
    
        document.getElementById(`task-list-${card_id}`).innerHTML = task_list(usename_of_user , card_id)
        document.getElementById(`add-task-input-${card_id}`).value = ''
    
    }
    // const last_tasklist_html = document.getElementById(`task-list${a}`).innerHTML
    // if(newtask_value !== ''){

    //     document.getElementById(`task-list${a}`).innerHTML = last_tasklist_html + task()
    // }
}