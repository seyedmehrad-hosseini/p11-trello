const task_list = (usename_of_user , card_id ,task_id ,task_value) =>{
    const user_card_index_array = find_evrycard_of_everyuser_in_cards_array(usename_of_user,card_id)

    var task_html = ``
    for (const iterator of cards[user_card_index_array[0]].card[user_card_index_array[1]].tasks) {

        task_html =task_html + 
        `
        <div class='task' id="${iterator.id}">
            <span id="${iterator.id}-title">${iterator.value}</span>
            <i class="fa fa-pencil edit-icon-task" onclick="show_edit_box('edit-box-${iterator.id}')"></i>
            <div id="input-div-edit-${iterator.id}" class="input-class-edit-task">
                <input id='input-edit-${iterator.id}' onblur="" value="">
                <button onclick="save_title_edited('${usename_of_user}','${card_id}','${iterator.id}','input-edit-${iterator.id}','input-div-edit-${iterator.id}','${iterator.value}')" >Save</button>
            </div>
            <div id="edit-box-${iterator.id}" class="edit-box-none">
                
                <i class="fa fa-pencil edit-icon" onclick="add_input_title('input-div-edit-${iterator.id}','input-edit-${iterator.id}','${iterator.value}')">
                    <span>Edit Task</span>
                </i>
            
            
            
                <i class="fa fa-close" onclick="del_task('${usename_of_user}','${card_id}','${iterator.id}')">
                    <span>Delete Task</span>
                </i>
            
            
            </div>
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