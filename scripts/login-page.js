
const login_page = (box_id)=>{

    const added_login_tag = `
                        <div class="login">
                            <span>sign in or log in to trello</span>
                            <input placeholder="username" id="username-login">
                            <input placeholder="password" id="password-login">
                            <div class="login-button">
                                <button class="join-button" onclick="ckeck_is_logedin()"  >login</button>
                                <button class="join-button" onclick="sign_in()" >signin</button>
                            </div>

                        </div>
`

box_id.innerHTML = added_login_tag
}
