const move_task = (usename_of_user,card_id,task_id,task_value) =>{

    const user_card_task_index = find_taskid_in_cards(usename_of_user,card_id,task_id)
    const new_card_id = cards[user_card_task_index[0]].card[user_card_task_index[1]+1].id


    if(new_card_id){

        cards[user_card_task_index[0]].card[user_card_task_index[1]].tasks.splice(user_card_task_index[2],1)
        
        const num_new_task_id = create_id_task(usename_of_user,new_card_id)
        const new_task_id = `${new_card_id}-task${num_new_task_id}`
        
        cards[user_card_task_index[0]].card[user_card_task_index[1]+1].tasks.push({"id" : new_task_id , "value" : task_value} )
        
        task_list_when_add_card(usename_of_user)


    }else{
        alert("error")
    }
    document.getElementById("close-edit-box-task" ).style.display ="none";


    // new
    // cards[user_card_task_index[0]].card[user_card_task_index[1]+1].tasks.push()


}