



const add_card = (usename_of_user) =>{
    
    const id_card = create_id_card(usename_of_user)
    const newcard_value = document.getElementById("add-card-input").value


    if(newcard_value !== ''){

        const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index

        cards[user_index].card.push({"id" : `card${id_card}` , "value" : newcard_value, tasks :[]} )
    
        document.getElementById("card-list").innerHTML = card_list(usename_of_user)
        
        task_list_when_add_card(usename_of_user)//It still shows the task_list when we add or delete card

        document.getElementById("add-card-input").value =''

    }


}
const del_card = (usename_of_user,card_id_for_del) =>{

        const user_and_card_index = find_evrycard_of_everyuser_in_cards_array(usename_of_user,card_id_for_del)

        cards[user_and_card_index[0]].card.splice(user_and_card_index[1] , 1)
    
        document.getElementById("card-list").innerHTML = card_list(usename_of_user ,card_id_for_del)

        task_list_when_add_card(usename_of_user)//It still shows the task_list when we add or delete card

        document.getElementById("add-card-input").value =''

}
