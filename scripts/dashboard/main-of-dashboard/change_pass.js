const changepass=(usename_of_user) =>{

    const a = `
                            <div class="change-pass-theme">
                                <span class="info-title">change your password</span>

                                <div class="name-input" >
                                    <span>last password:</span>
                                    <input type="text" id="last-pass-input" placeholder="last password">
                                </div>
                                <div class="lastname-input" >
                                    <span>repeat last password:</span>
                                    <input type="text" id="repeat-pass-input" placeholder="last password">
                                </div>
                                <div class="lastname-input" >
                                    <span>new pass:</span>
                                    <input type="text" id="new-pass-input" placeholder="new pass">
                                </div>
                                <div class="info-button">
                                    <button onclick="changing_pass('${usename_of_user}')" id="change-pass-button" class="join-button">Change pass</button>

                                </div>
                            </div>
    `
    return a
}