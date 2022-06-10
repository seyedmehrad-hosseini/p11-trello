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


