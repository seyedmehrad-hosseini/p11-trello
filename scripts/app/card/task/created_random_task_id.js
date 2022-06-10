const create_id_task = (usename_of_user,card_id) =>{
    //Creates a random ID that is not repeated for use on the card id
    

    const rand_task_id = `${Math.floor(Math.random() * 100)}`;

    const user_card_task_index = find_taskid_in_cards(usename_of_user,card_id,`card${rand_task_id}`)

    if(user_card_task_index[2]=== -1){
        // console.log(rand_task_id)
        return rand_task_id
    }
    else{
        return create_id_task(usename_of_user)
    }
}