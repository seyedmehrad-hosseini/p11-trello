const card = () =>{

    const card_html = `
                <div class="card">
                    <div>
                        <span>aaaa</span>
                        <i class="fa fa-ellipsis-h"></i>

                    </div>
                    <div class='task-list' id="task-list">

                    </div>
                    <div class='add-task'>
                        <input placeholder='+ Add a task' id='add-input' onChange=''></input>
                        <button >Add</button>
                    </div>
                </div>
    `
    return card_html
}