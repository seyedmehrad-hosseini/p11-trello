
const create_id_card = (usename_of_user) =>{
    //Creates a random ID that is not repeated for use on the ID card
    const rand_card_id = `${Math.floor(Math.random() * 100)}`;
    const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index
    const card_index =  cards[user_index].card.findIndex((item) => item.id === rand_card_id)//findes user index

    if(card_index === -1){
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


        const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index


        const card_index =  cards[user_index].card.findIndex((item) => item.id === card_id_for_del)//findes user index

        cards[user_index].card.splice(card_index , 1)
    
        document.getElementById("card-list").innerHTML = card_list(usename_of_user ,card_id_for_del)
    

    


}