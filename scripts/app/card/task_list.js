const task_list = (usename_of_user , card_id) =>{
    const user_card_index_array = find_evrycard_of_everyuser_in_cards_array(usename_of_user,card_id)

    var task_html = ``
    for (const iterator of cards[user_card_index_array[0]].card[user_card_index_array[1]].tasks) {
        console.log(iterator)
        task_html =task_html + 
        `
        <div class='task'>
            <span>task1</span>
            <i class="fa fa-pencil"></i>
    
        </div>
        
        `
        

        
    }
    


    return task_html

}

const task_list_when_add_card = (usename_of_user) =>{

    const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index


    for (const iterator of cards[user_index].card) {

    document.getElementById(`task-list-${iterator.id}`).innerHTML = task_list(usename_of_user,iterator.id)

   
    }
    
}