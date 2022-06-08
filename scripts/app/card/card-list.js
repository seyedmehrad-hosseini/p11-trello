const card_list = (usename_of_user) =>{

    const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index
    console.log(cards)

    var card_html = ``
    for (const iterator of cards[user_index].card) {
        console.log(iterator)
        card_html =card_html + `
        <div class="card" id="${iterator.id}">
            <div>
                <div class="input-class" id="title-card-${iterator.id}">
                    <span  onclick="edit_card_title('${usename_of_user}','${iterator.id}','title-card-${iterator.id}' ,'${iterator.value}')">${iterator.value}</span>
                </div>
                <i class="fa fa-close" onclick="show_edit_box('edit-box-${iterator.id}')"></i>

            </div>
            <div id="edit-box-${iterator.id}" class="edit-box-none">
                
                    <i class="fa fa-pencil edit-icon">
                        <span>Edit Card</span>
                    </i>
                    
                
               
                    <i class="fa fa-close" onclick="del_card('${usename_of_user}','${iterator.id}')">
                        <span>Delete Card</span>
                    </i>
               

            </div>
            <div class='task-list' id="task-list">


            </div>
            <div class='add-task'>
                <input placeholder='+ Add a task' id='add-task-input' onChange=''></input>
                <button onclick="add_task()" >Add</button>
            </div>
        </div>
`

        
    }
    

    return card_html
}

const show_edit_box = (edit_box_id) => {

    document.getElementById(edit_box_id).classList.toggle("edit-box-card");

}





