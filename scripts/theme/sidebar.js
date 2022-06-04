const sidbar = (id)=>{

    const sidbar = `
    
        <span class="account">
            Account Preferences
        </span>
        <ul class="account-list">
            <li onclick="main_theme_loade(info())">Profile Information</li>
            <li onclick="main_theme_loade(display())">Display</li>
            <li onclick="main_theme_loade(changepass())">Change Password</li>
            <li onclick="main_theme_loade(manage_acc())">Account Management</li>
        </ul>
    

    `
    document.getElementById(id).innerHTML= sidbar

}