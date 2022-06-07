const app_page = () =>{
    const app_page_html = `
                <div class="app-page" id="app-page">

                    <div class="card-list">
                        <div class="card">
                            <div>
                                <span>aaaa</span>
                                <i class="fa fa-ellipsis-h"></i>

                            </div>
                            <div class='task-list' >

                            </div>
                            <div class='add-task'>
                                <input placeholder='+ Add a task' id='add-input' onChange=''></input>
                                <button >Add</button>
                            </div>
                        </div>
                        <div class='add-card'>
                            <input placeholder='+ Add a card'  id='add-input2' onChange=''></input>
                            <button onClick=''>Add</button>
                        </div>
                    </div>
                </div>
    
    `
    return app_page_html
}