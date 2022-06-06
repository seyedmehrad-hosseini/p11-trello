const manage_acc=(usename_of_user) =>{

    const a = `
                    <div class="manage-account-theme">
                        <span class="info-title">log out or delete account</span>

                        <div class="name-input" >
                            <span>password:</span>
                            <input type="text" id="manage-pass-input" placeholder="Name">
                        </div>
                    
                        <div class="info-button">
                            <button onclick="log_out('${usename_of_user}')" class="join-button">log out</button>

                        </div>
                        <div class="info-button">
                            <button onclick="del_acc('${usename_of_user}')" class="join-button">delete account</button>

                        </div>
                    </div>
    `
    return a
}