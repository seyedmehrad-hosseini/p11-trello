const card_list = (usename_of_user) =>{

    const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index
    console.log(cards)

    var card_html = ``
    for (const iterator of cards[user_index].card) {
        console.log(iterator)
        card_html =card_html + `
        <div class="card" id="${iterator.id}">
            <div class="title-box">
                <div class="input-class" id="title-card-${iterator.id}">
                    <span  onclick="edit_card_title('${usename_of_user}','${iterator.id}','title-card-${iterator.id}' ,'${iterator.value}')">${iterator.value}</span>
                </div>
                <i class="fa fa-close" onclick="del_card('${usename_of_user}','${iterator.id}')"></i>

            </div>

            <div class='task-list' id="task-list-${iterator.id}">


            </div>
            <div class='add-task'>
                <input placeholder='+ Add a task' id='add-task-input-${iterator.id}' onChange=''></input>
                <button onclick="add_task('${usename_of_user}','${iterator.id}')" >Add</button>
            </div>
        </div>
`

   
    }
    

    return card_html
}







