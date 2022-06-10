const find_evrycard_of_everyuser_in_cards_array = (usename_of_user,card_id) =>{
    //return array of userindex and card index
    const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index
    const card_index =  cards[user_index].card.findIndex((item) => item.id === card_id)//findes card index of user index
    return [user_index,card_index]
}