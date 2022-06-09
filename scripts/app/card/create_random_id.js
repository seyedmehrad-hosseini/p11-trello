const create_id_card = (usename_of_user) =>{
    //Creates a random ID that is not repeated for use on the card id


    const rand_card_id = `${Math.floor(Math.random() * 100)}`;

    const user_and_card_index = find_evrycard_of_everyuser_in_cards_array(usename_of_user,`card${rand_card_id}`)

    if(user_and_card_index[1]=== -1){
        console.log(rand_card_id)
        return rand_card_id
    }
    else{
        return create_id_card(usename_of_user)
    }
}
const find_evrycard_of_everyuser_in_cards_array = (usename_of_user,card_id) =>{
    //return array of userindex and card index
    const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index
    const card_index =  cards[user_index].card.findIndex((item) => item.id === card_id)//findes card index of user index
    return [user_index,card_index]
}
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
const find_taskid_in_cards = (usename_of_user,card_id,rand_task_id) =>{
    
    //return array of userindex and card index
    const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index
    const card_index =  cards[user_index].card.findIndex((item) => item.id === card_id)//findes card index of user index
    const task_index =  cards[user_index].card[card_index].tasks.findIndex((item) => item.id === rand_task_id)//findes card index of user index
    
    return [user_index,card_index,task_index]
}