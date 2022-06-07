const app_page = () =>{
    const app_page_html = `
                <div class="app-page" id="app-page">

                    <div class="card-list" id = "card-list">

                        <div class='add-card' >
                            <input placeholder='+ Add a card'  id='add-card-input' onChange=''></input>
                            <button onclick="add_card()">Add</button>
                        </div>
                    </div>
                </div>
    
    `
    return app_page_html
}