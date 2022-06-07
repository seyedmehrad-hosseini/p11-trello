const card_list = (usename_of_user) =>{

    const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index
    console.log(cards)

    var card_html = ``
    for (const iterator of cards[user_index].card) {
        console.log(iterator)
        card_html =card_html + `
        <div class="card" id="${iterator.id}">
            <div>
                <span>${iterator.value}</span>
                <i class="fa fa-ellipsis-h" onclick="show_edit_box('edit-box-${iterator.id}')"></i>
                <div id="edit-box-${iterator.id}">
                    <i class="fa fa-pencil edit-icon"></i>
                    <i class="fa fa-close" onclick="del_card('${usename_of_user}','${iterator.id}')"></i>
                </div>
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