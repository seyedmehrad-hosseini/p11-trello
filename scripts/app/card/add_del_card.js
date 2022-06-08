
const create_id_card = (usename_of_user) =>{
    //Creates a random ID that is not repeated for use on the card id


    const rand_card_id = `${Math.floor(Math.random() * 100)}`;

    const user_and_card_index = find_evrycard_of_everyuser_in_cards_array(usename_of_user,rand_card_id)

    if(user_and_card_index[1]=== -1){
        return rand_card_id
    }
    else{
        return create_id_card(usename_of_user)
    }
}


const add_card = (usename_of_user) =>{
    
    const id_card = create_id_card(usename_of_user)
    const newcard_value = document.getElementById("add-card-input").value


    if(newcard_value !== ''){

        const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index

        cards[user_index].card.push({"id" : `card${id_card}` , "value" : newcard_value})
    
        document.getElementById("card-list").innerHTML = card_list(usename_of_user)
    
    console.log(id_card)
    }


}
const del_card = (usename_of_user,card_id_for_del) =>{

        const user_and_card_index = find_evrycard_of_everyuser_in_cards_array(usename_of_user,card_id_for_del)

        cards[user_and_card_index[0]].card.splice(user_and_card_index[1] , 1)
    
        document.getElementById("card-list").innerHTML = card_list(usename_of_user ,card_id_for_del)


}
const find_evrycard_of_everyuser_in_cards_array = (usename_of_user,card_id) =>{
    //return array of userindex and card index
    const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index
    const card_index =  cards[user_index].card.findIndex((item) => item.id === card_id)//findes card index of user index
    return [user_index,card_index]
}