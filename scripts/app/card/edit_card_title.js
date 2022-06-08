const edit_card_title =(usename_of_user,card_id,card_title_id ,card_title_value) =>{

    const input_html_for_edit_title = `
    
        <input id="input-${card_title_id}" value="${card_title_value}" onblur="change_card_title('${usename_of_user}','${card_id}','input-${card_title_id}','${card_title_id}','${card_title_value}')">
    `
    document.getElementById(card_title_id).innerHTML =input_html_for_edit_title


}

const change_card_title = (usename_of_user,card_id,input_card_title_id,card_title_id ) =>{

    const new_title_card = document.getElementById(input_card_title_id).value

    //this codes change title edited in cards array
    const user_and_card_index = find_evrycard_of_everyuser_in_cards_array(usename_of_user,card_id)
    cards[user_and_card_index[0]].card[user_and_card_index[1]].value = new_title_card

    //creates new title edited span and put in title card
    const span_of_title_that_edited = `
        <span  onclick="edit_card_title('${usename_of_user}','${card_id}','${card_title_id}' ,'${new_title_card}')">${new_title_card}</span>

    `
    document.getElementById(card_title_id).innerHTML =span_of_title_that_edited

}