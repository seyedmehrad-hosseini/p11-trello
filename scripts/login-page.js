
const login_page = ()=>{


    const box_id = document.getElementById("welcome-login-box")
    const removed_welcom_tag = box_id.getElementsByTagName("div")[0]
    box_id.removeChild(removed_welcom_tag)
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
    box_id.innerHTML = loading_animation()
    setTimeout(()=>{
        box_id.innerHTML = added_login_tag
    }, 1000)
    }
