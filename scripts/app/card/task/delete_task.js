const del_task = (usename_of_user,card_id,task_id) =>{

    const task_index =  find_taskid_in_cards(usename_of_user,card_id,task_id)
    
    document.getElementById(task_id).style.opacity="0"
    setTimeout(()=>{

        cards[task_index[0]].card[task_index[1]].tasks.splice(task_index[2],1)
        task_list_when_add_card(usename_of_user)
    }, 300)
    document.getElementById("close-edit-box-task" ).style.display ="none";


}