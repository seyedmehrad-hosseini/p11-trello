const app_page = (usename_of_user) =>{

    const user_index = find_user_index(usename_of_user)
    console.log(user_index)
    console.log(users[user_index].backgroundimg_address)

    const app_page_html = `
                <div class="app-page" id="app-page"style="background-image :url(${users[user_index].backgroundimg_address.addres}) ;">

                    <div class="card-list" id = "card-list">


                    </div>
                    <div class='add-card' >
                        <input placeholder='+ Add a card'  id='add-card-input' onChange=''></input>
                        <button onclick="add_card('${usename_of_user}')">Add</button>
                    </div>
                </div>
    
    `
    
    return app_page_html
}
